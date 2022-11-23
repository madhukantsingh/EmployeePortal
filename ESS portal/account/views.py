import pandas as pd
from rest_framework.response import Response
from rest_framework import status,permissions
from django.shortcuts import render 
from rest_framework.views import APIView
from account.serializers import *
# from account.serializers import ProfileSerializer
from django.contrib.auth import authenticate
from account.renderers import UserRenderer
from account.models import Profile,Fileupload,Assets
# from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from rest_framework.authentication import TokenAuthentication
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
from .permissions import IsadminUser, IsstaffUser
from django.core.files.storage import default_storage
from datetime import datetime
import mysql.connector

# Generate Token Manually
def get_tokens_for_user(user):  
  refresh = RefreshToken.for_user(user)
  return {
      'refresh': str(refresh),
      'access': str(refresh.access_token),
  }

class UserRegistrationView(APIView):
  renderer_classes = [UserRenderer]
  permission_classes = [permissions.IsAuthenticated&IsadminUser]
  def post(self, request, format=None):
    serializer = UserRegistrationSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = serializer.save()
    token = get_tokens_for_user(user)
    return Response({'token':token, 'msg':'Registration Successful'}, status=status.HTTP_201_CREATED)

class UserLoginView(APIView):
  renderer_classes = [UserRenderer]
  def post(self, request, format=None):
    serializer = UserLoginSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    email = serializer.data.get('email')
    password = serializer.data.get('password')
    user = authenticate(email=email, password=password)
    if user is not None:
      token = get_tokens_for_user(user)
      if user.is_admin:
        permissions = {"role":"admin",
        "registration":{"view":1,"create":1,"change":1,"delete":1},              
        "payroll":{"view":1,"download":1,"upload":1},
        "leave":{"view":1,"apply":1,"approve":1,"reject":1},
        "profile":{"view":1,"create":1,"change":1,"delete":1},
        "addawads":{"view":1,"awards":1,"change":1,"delete":1},
        "appraisal":{"view":1,"create":1,"change":1,"delete":1},
        "dependents":{"view":1,"create":1,"change":1,"delete":0},
        "adddependents":{"view":1,"create":0,"change":0,"delete":0},
        
        
        "leave_management":{"view":1,"apply":1,"approve":1,"reject":1}}
      else:
        permissions = {"role":"staff",
        "registration":{"view":1,"create":0,"change":0,"delete":0},   
        "payroll":{"view":1,"download":1,"upload":0},
        "profile":{"view":1,"create":0,"change":0,"delete":0},
        "addawads":{"view":1,"awards":0,"change":0,"delete":0},
        "appraisal":{"view":1,"create":0,"change":0,"delete":0},
        "dependents":{"view":1,"create":1,"change":0,"delete":0},
        "adddependents":{"view":1,"create":1,"change":1,"delete":1},
        
       
        "leave_management":{"view":1,"apply":1,"approve":0,"reject":0}}
        
      return Response({'token':token,'permissions':permissions, 'msg':'Login Success'}, status=status.HTTP_200_OK)
    else:
      return Response({'errors':{'non_field_errors':['Email or Password is not Valid']}}, status=status.HTTP_404_NOT_FOUND)

class UserProfileView(APIView):
  renderer_classes = [UserRenderer]
  permission_classes = [IsAuthenticated]
  def get(self, request, format=None):
    serializer = UserProfileSerializer(request.user)
    return Response(serializer.data, status=status.HTTP_200_OK)

class UserChangePasswordView(APIView):
  renderer_classes = [UserRenderer]
  permission_classes = [IsAuthenticated]
  def post(self, request, format=None):
    serializer = UserChangePasswordSerializer(data=request.data, context={'user':request.user})
    serializer.is_valid(raise_exception=True)
    return Response({'msg':'Password Changed Successfully'}, status=status.HTTP_200_OK)

class SendPasswordResetEmailView(APIView):
  renderer_classes = [UserRenderer]
  def post(self, request, format=None):
    serializer = SendPasswordResetEmailSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    return Response({'msg':'Password Reset link send. Please check your Email'}, status=status.HTTP_200_OK)


class UserPasswordResetView(APIView):
  renderer_classes = [UserRenderer]
  def post(self, request, uid, token, format=None):
    serializer = UserPasswordResetSerializer(data=request.data, context={'uid':uid, 'token':token})
    serializer.is_valid(raise_exception=True)
    return Response({'msg':'Password Reset Successfully'}, status=status.HTTP_200_OK)


class Profilephoto(APIView):
  renderer_classes = [UserRenderer]
  # permission_classes = [IsAuthenticated]
  def get(self,request,emp_id):
    try:
            
      conn =  mysql.connector.connect(host="localhost", user="root", passwd="root@123", port=3306, database="log")
      cur = conn.cursor()
      # date = datetime.today().strftime('%Y-%m-%d')
      # print(date)
      query = "select * from log.profile where emp_id = '"+emp_id+"'"
      print(query)
      cur.execute(query)
      columns = cur.description 
      result = [{columns[index][0]:column for index, column in enumerate(value)} for value in cur.fetchall()]
      l = result[0]
      final_result = "loacalhost:8000/media/" + l.get("attacthment") 
      print(final_result)
      response = JsonResponse(final_result,safe=False)
      print(response)
      return response
    except:
        return(JsonResponse("Failed to fetch.", safe=False))

class ProfileApi(APIView):
  renderer_classes = [UserRenderer]
  authentication_c1asses=[TokenAuthentication]
  permission_classes = [permissions.IsAuthenticated&IsstaffUser]
  def get(self,request,emp_id=0):
    print("tharun",id)
    profile=Profile.objects.get(pk=emp_id)
    profileserializer=ProfileSerializer(profile,many=False)
    return Response(profileserializer.data, status=status.HTTP_200_OK)
    

class ProfilepostApi(APIView):
  renderer_classes = [UserRenderer]
  permission_classes = [permissions.IsAuthenticated&IsstaffUser]
  def post(self, request, format=None):
    serializer = ProfileSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data, status=status.HTTP_200_OK)

class ProfileputApi(APIView):
  renderer_classes = [UserRenderer]
  permission_classes = [permissions.IsAuthenticated&IsstaffUser]
  permission_classes = [IsAuthenticated]
  def put(self,request,emp_id):
    print("tharun")
    profile=Profile.objects.get(pk=emp_id)
    profileserializer=ProfileSerializer(profile,data=request.data)
    profileserializer.is_valid(raise_exception=True)
    profile = profileserializer.save()
    return Response(profileserializer.data, status=status.HTTP_200_OK)




class ProfiledeleteApi(APIView):
  renderer_classes = [UserRenderer]
  permission_classes = [IsAuthenticated]  
  def delete(self,request,emp_id):
    request = request
    print(request)
    profile_data=Profile.objects.get(pk=emp_id)
    profile_data.delete()
    return Response("Deleted Successfully", status=status.HTTP_200_OK)



class SaveFileApi(APIView):
  renderer_classes = [UserRenderer]
  permission_classes = [permissions.IsAuthenticated&IsadminUser]
  def post(self,request):
    file=request.FILES['myFile']
    file_name = default_storage.save(file.name,file)
    return JsonResponse(file_name,safe=False)

  

class LeaveManagementApi(APIView):
  renderer_classes = [UserRenderer]
  permission_classes = [permissions.IsAuthenticated&IsstaffUser]
  def get(self,request,emp_id=0):
    leavemanagement=LeaveManagement.objects.get(pk=emp_id)
    leavemanagementserializer=LeaveManagementSerializer(leavemanagement,many=False)
    return Response(leavemanagementserializer.data, status=status.HTTP_200_OK)
    

class LeaveManagementpostApi(APIView):
  renderer_classes = [UserRenderer]
  permission_classes = [permissions.IsAuthenticated&IsstaffUser]
  def post(self, request, format=None):
    request.data['status'] = "Apply"
    serializer = LeaveManagementSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data, status=status.HTTP_200_OK)



class LeaveManagementputApi(APIView):
  renderer_classes = [UserRenderer]
  permission_classes = [permissions.IsAuthenticated&IsstaffUser]
  def put(self,request,emp_id):
    print("tharun")
    leave=LeaveManagement.objects.get(pk=emp_id)
    leaveserializer=LeaveManagementSerializer(leave,data=request.data)
    leaveserializer.is_valid(raise_exception=True)
    leaveserializer.save()
    return Response(leaveserializer.data, status=status.HTTP_200_OK)


class Leavemanagementdelete(APIView):
  renderer_classes = [UserRenderer]
  permission_classes = [IsAuthenticated]  
  def delete(self,request,emp_id):
    request = request
    print(request)
    leavemanagement=LeaveManagement.objects.get(pk=emp_id)
    leavemanagement.delete()
    return Response("Deleted Successfully", status=status.HTTP_200_OK)



class DependentsApi(APIView):
  renderer_classes = [UserRenderer]
  permission_classes = [permissions.IsAuthenticated&IsstaffUser]
  def get(self,request,emp_id):
    try:
            
      conn =  mysql.connector.connect(host="localhost", user="root", passwd="root@123", port=3306, database="log")
      cur = conn.cursor()
      # date = datetime.today().strftime('%Y-%m-%d')
      # print(date)
      query = "select * from log.dependents where emp_id = '"+emp_id+"'"
      print(query)
      cur.execute(query)
      columns = cur.description 
      result = [{columns[index][0]:column for index, column in enumerate(value)} for value in cur.fetchall()]
      print(result)
      response = JsonResponse(result,safe=False)
      print(response)
      return response
    except:
        return(JsonResponse("Failed to fetch.", safe=False))
      
class IndividualDependents(APIView):
  renderer_classes = [UserRenderer]
  permission_classes = [permissions.IsAuthenticated&IsstaffUser]
  def get(self,request,did=0):
    print("tharun",did)
    dependents=Dependents.objects.get(pk=did)
    serializer=DependentsSerializer(dependents,many=False)
    return Response(serializer.data, status=status.HTTP_200_OK)
    
class ApplyDependentsApi(APIView):
  renderer_classes = [UserRenderer]
  permission_classes = [permissions.IsAuthenticated]
  def get(self,starting_date):
    try:
            
      conn =  mysql.connector.connect(host="localhost", user="root", passwd="root@123", port=3306, database="log")
      cur = conn.cursor()
      # date = datetime.today().strftime('%Y-%m-%d')
      # print(date)
      query = "select * from log.dependents where status ='Rejected'"
      print(query)
      cur.execute(query)
      columns = cur.description 
      result = [{columns[index][0]:column for index, column in enumerate(value)} for value in cur.fetchall()]
      print(result)
      response = JsonResponse(result,safe=False)
      print(response)
      return response
    except:
        return(JsonResponse("Failed to fetch.", safe=False))   



class DependentspostApi(APIView):
  renderer_classes = [UserRenderer]
  permission_classes = [permissions.IsAuthenticated&IsstaffUser]
  def post(self, request, format=None):
    serializer = DependentsSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data, status=status.HTTP_200_OK)

class DependentsputApi(APIView):
  renderer_classes = [UserRenderer]
  permission_classes = [permissions.IsAuthenticated&IsstaffUser]
  def put(self,request,emp_id):
    print("tharun")
    dependents=Dependents.objects.get(pk=emp_id)
    dependentserializer=DependentsSerializer(dependents,data=request.data)
    dependentserializer.is_valid(raise_exception=True)
    dependentserializer.save()
    return Response(dependentserializer.data, status=status.HTTP_200_OK)



class AppraisalApi(APIView):
  renderer_classes = [UserRenderer]
  permission_classes = [permissions.IsAuthenticated&IsstaffUser]
  def get(self,request,emp_id=0):
    try:
           
      conn =  mysql.connector.connect(host="localhost", user="root", passwd="root@123", port=3306, database="log")
      cur = conn.cursor()
      if emp_id:
        query = query = "select * from log.appraisal where emp_id = '"+emp_id+"'"
      else:
        query = query = "select * from log.appraisal"
      print(query)
      cur.execute(query)
      columns = cur.description 
      result = [{columns[index][0]:column for index, column in enumerate(value)} for value in cur.fetchall()]
      print("tharun")
      return JsonResponse(result,safe=False)
    except:
        return(JsonResponse("Failed to fetch.", safe=False))

class AppraisalpostApi(APIView):
  renderer_classes = [UserRenderer]
  permission_classes = [IsAuthenticated]
  def post(self, request, format=None):
    serializer = AppraisalSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data, status=status.HTTP_200_OK)

class AppraisalputApi(APIView):
  renderer_classes = [UserRenderer]
  permission_classes = [IsAuthenticated]
  def put(self,request,emp_id):
    print("tharun")
    appraisal=Appraisal.objects.get(pk=emp_id)
    appraisalserializer=AppraisalSerializer(appraisal,data=request.data)
    appraisalserializer.is_valid(raise_exception=True)
    appraisal = appraisalserializer.save()
    return Response(("Updated Successfully!!",appraisalserializer.data), status=status.HTTP_200_OK)

class Appraisaldelete(APIView):
  renderer_classes = [UserRenderer]
  permission_classes = [IsAuthenticated]  
  def delete(self,request,emp_id):
    request = request
    print(request)
    appraisal=Appraisal.objects.get(pk=emp_id)
    appraisal.delete()
    return Response("Deleted Successfully", status=status.HTTP_200_OK)


class PayrollApi(APIView):
  renderer_classes = [UserRenderer]
  permission_classes = [permissions.IsAuthenticated&IsstaffUser]
  def get(self,request,emp_id=0):
    print("tharun",emp_id)
    payroll=Payroll.objects.get(pk=emp_id)
    payrollserializer=PayrollSerializer(payroll,many=False)
    return Response(payrollserializer.data, status=status.HTTP_200_OK)
  
class Leavelist(APIView):
  renderer_classes = [UserRenderer]
  permission_classes = [IsAuthenticated]
  def get(self,starting_date):
    try:
            
      conn =  mysql.connector.connect(host="localhost", user="root", passwd="root@123", port=3306, database="log")
      cur = conn.cursor()
      date = datetime.today().strftime('%Y-%m-%d')
      print(date)
      query = "SELECT * from log.leave_management where '"+date+"' between starting_date and end_date"
      print(query)
      cur.execute(query)
      columns = cur.description 
      result = [{columns[index][0]:column for index, column in enumerate(value)} for value in cur.fetchall()]
      print(result)
      response = JsonResponse(result,safe=False)
      print(response)
      return response
    except:
        return(JsonResponse("Failed to fetch.", safe=False))
      
      
class Leavelistcount(APIView):
  renderer_classes = [UserRenderer]
  permission_classes = [permissions.IsAuthenticated&IsstaffUser]
  def get(self,starting_date):
    try:
            
      conn =  mysql.connector.connect(host="localhost", user="root", passwd="root@123", port=3306, database="log")
      cur = conn.cursor()
      date = datetime.today().strftime('%Y-%m-%d')
      print(date)
      # query = "select count(status) as "'"cnt"'" from log.leave_management where starting_date = '"+date+"'"
      query = "SELECT count(status) as "'"cnt"'" from log.leave_management where '"+date+"' between starting_date and end_date"
      print(query)
      cur.execute(query)
      columns = cur.description 
      result = [{columns[index][0]:column for index, column in enumerate(value)} for value in cur.fetchall()]
      # result = pd.DataFrame(result)
      # result = result.to_json(orient="records")
      # print(type(result))
      response = JsonResponse(result,safe=False)
      print(response)
      return response
    except:
        return(JsonResponse("Failed to fetch.", safe=False))
      
      
class Leavehistory(APIView):
  renderer_classes = [UserRenderer]
  permission_classes = [IsAuthenticated]
  def get(self,request,emp_id):
    try:
            
      conn =  mysql.connector.connect(host="localhost", user="root", passwd="root@123", port=3306, database="log")
      cur = conn.cursor()
      # date = datetime.today().strftime('%Y-%m-%d')
      # print(date)
      query = "select * from log.leave_management where emp_id = '"+emp_id+"'"
      print(query)
      cur.execute(query)
      columns = cur.description 
      result = [{columns[index][0]:column for index, column in enumerate(value)} for value in cur.fetchall()]
      print(result)
      response = JsonResponse(result,safe=False)
      print(response)
      return response
    except:
        return(JsonResponse("Failed to fetch.", safe=False))


class ApplyList(APIView):
  renderer_classes = [UserRenderer]
  permission_classes = [IsAuthenticated]
  def get(self,starting_date):
    try:
            
      conn =  mysql.connector.connect(host="localhost", user="root", passwd="root@123", port=3306, database="log")
      cur = conn.cursor()
      # date = datetime.today().strftime('%Y-%m-%d')
      # print(date)
      query = "select * from log.leave_management where status ='Apply'"
      print(query)
      cur.execute(query)
      columns = cur.description 
      result = [{columns[index][0]:column for index, column in enumerate(value)} for value in cur.fetchall()]
      print(result)
      response = JsonResponse(result,safe=False)
      print(response)
      return response
    except:
        return(JsonResponse("Failed to fetch.", safe=False)) 

class Individualleave(APIView):
  renderer_classes = [UserRenderer]
  permission_classes = [permissions.IsAuthenticated&IsstaffUser]
  def get(self,request,lid=0):
    print("tharun",lid)
    leavemanagement=LeaveManagement.objects.get(pk=lid)
    leavemanagementserializer=LeaveManagementSerializer(leavemanagement,many=False)
    return Response(leavemanagementserializer.data, status=status.HTTP_200_OK)


class FileuploadSet(APIView):
  renderer_classes = [UserRenderer]
  permission_classes = [permissions.IsAuthenticated&IsstaffUser]
  # queryset = Fileupload.objects.all()
  # serializer_class = FileuploadSerializer
  # def post(self, request, *args, **kwargs):
  #     Details = request.data['Details']
  #     File = request.data['File']
  #     Fileupload.objects.create(File=File, Details=Details)
  #     return Response({'message': 'Fileupload'}, status=200)
  def post(self, request, format=None):
    serializer = FileuploadSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data, status=status.HTTP_200_OK)


class Payrolldownload(APIView):
  renderer_classes = [UserRenderer]
  # permission_classes = [IsAuthenticated]
  def get(self,request):
    serializer = FileuploadSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)

    # File = serializer.data.get('File')

    try:
      month = serializer.data.get('month')
      emp_id = str(serializer.data.get('emp_id'))
      File = serializer.data.get('File')
      print(month)
      print(type(emp_id))
      print(File)
      
      conn =  mysql.connector.connect(host="localhost", user="root", passwd="root@123", port=3306, database="log")
      cur = conn.cursor()
      # date = datetime.today().strftime('%Y-%m-%d')
      # print(date)
      print("tharun")
      new = "SELECT Details FROM log.account_fileupload where `month` ='"+month+"' and `File` = '"+File+"' and `emp_id` = '"+emp_id+"'"
      print(new)
      
      cur.execute(new)
      columns = cur.description 
      result = [{columns[index][0]:column for index, column in enumerate(value)} for value in cur.fetchall()]
      l = result[0]
      final_result = "/media/" + l.get("Details") 
      print(final_result)
      response = JsonResponse(final_result,safe=False)
      print(response)
      return response
    except:
        return(JsonResponse("Failed to fetch.", safe=False))



class AssetsgetApi(APIView):
  # renderer_classes = [UserRenderer]
  # permission_classes = [permissions.IsAuthenticated]
  def get(self,request,emp_id=0):
    try:
           
      conn =  mysql.connector.connect(host="localhost", user="root", passwd="root@123", port=3306, database="log")
      cur = conn.cursor()
      if emp_id:
        query = query = "select * from log.assets where emp_id = '"+emp_id+"'"
      else:
        query = query = "select * from log.assets"
      print(query)
      cur.execute(query)
      columns = cur.description 
      result = [{columns[index][0]:column for index, column in enumerate(value)} for value in cur.fetchall()]
      print("tharun")
      return JsonResponse(result,safe=False)
    except:
        return(JsonResponse("Failed to fetch.", safe=False))
class IndividualAssets(APIView):
  renderer_classes = [UserRenderer]
  permission_classes = [permissions.IsAuthenticated&IsstaffUser]
  def get(self,request,id=0):
    
    print("tharun",id)
    assets=Assets.objects.get(pk=id)
    serializer=AssetsSerializer(assets,many=False)
    return Response(serializer.data, status=status.HTTP_200_OK)


class ApplyAssetsApi(APIView):
  renderer_classes = [UserRenderer]
  permission_classes = [permissions.IsAuthenticated]
  def get(self,starting_date):
    try:
            
      conn =  mysql.connector.connect(host="localhost", user="root", passwd="root@123", port=3306, database="log")
      cur = conn.cursor()
      # date = datetime.today().strftime('%Y-%m-%d')
      # print(date)
      query = "select * from log.assets where status ='Apply'"
    
      
      print(query)
      cur.execute(query)
      columns = cur.description 
      result = [{columns[index][0]:column for index, column in enumerate(value)} for value in cur.fetchall()]
      print(result)
      response = JsonResponse(result,safe=False)
      print(response)
      return response
    except:
        return(JsonResponse("Failed to fetch.", safe=False))   


    

class AssetspostApi(APIView):
  renderer_classes = [UserRenderer]
  permission_classes = [permissions.IsAuthenticated]
  def post(self, request, format=None):
    serializer = AssetsSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data, status=status.HTTP_200_OK)

class AsstesputApi(APIView):
  renderer_classes = [UserRenderer]
  permission_classes = [permissions.IsAuthenticated&IsstaffUser]
  def put(self,request,emp_id):
    print("tharun")
    assets=Assets.objects.get(pk=emp_id)
    assetsserializer=AssetsSerializer(assets,data=request.data)
    assetsserializer.is_valid(raise_exception=True)
    assetsserializer.save()
    return Response(assetsserializer.data, status=status.HTTP_200_OK)


class Empofmonthget(APIView):
  renderer_classes = [UserRenderer]
  permission_classes = [IsAuthenticated]
  def get(self,request):
    try:
            
      conn =  mysql.connector.connect(host="localhost", user="root", passwd="root@123", port=3306, database="log")
      cur = conn.cursor()
      # date = datetime.today().strftime('%Y-%m-%d')
      # print(date)
      query = "SELECT * FROM log.empofmonth"
      print(query)
      cur.execute(query)
      columns = cur.description 
      result = [{columns[index][0]:column for index, column in enumerate(value)} for value in cur.fetchall()]
      print(result)
      response = JsonResponse(result,safe=False)
      print(response)
      return response
    except:
        return(JsonResponse("Failed to fetch.", safe=False))


class Empofmonthhpost(APIView):
  renderer_classes = [UserRenderer]
  permission_classes = [permissions.IsAuthenticated]
  def post(self, request, format=None):
    serializer = EmpofmonthSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data, status=status.HTTP_200_OK)
  
  
  
  
class filelist(APIView):
  renderer_classes = [UserRenderer]
  permission_classes = [IsAuthenticated]
  def get(self,starting_date):
    try:
            
      conn =  mysql.connector.connect(host="localhost", user="root", passwd="root@123", port=3306, database="log")
      cur = conn.cursor()
      # date = datetime.today().strftime('%Y-%m-%d')
      # print(date)
      query = "SELECT * from log.account_fileupload "
      print(query)
      cur.execute(query)
      columns = cur.description 
      result = [{columns[index][0]:column for index, column in enumerate(value)} for value in cur.fetchall()]
      l = result[0]
      final_result = "localhost:8000/media/" + l.get("Details") 
      print(final_result)
      response = JsonResponse(final_result,safe=False)
      print(response)
      return response
    except:
        return(JsonResponse("Failed to fetch.", safe=False))