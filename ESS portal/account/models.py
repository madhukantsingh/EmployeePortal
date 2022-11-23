from email.headerregistry import Group
from tokenize import group
from django.db import models
from django.contrib.auth.models import BaseUserManager,AbstractBaseUser

#  Custom User Manager
class UserManager(BaseUserManager):
  def create_user(self, email, name,emp_id=None,is_admin=None,is_staff=True,is_active=True, password=None, password2=None):
      """
      Creates and saves a User with the given email, name, tc and password.
      """
      if not email:
          raise ValueError('User must have an email address')

      user = self.model(
          email=self.normalize_email(email),
          name=name,
          is_active=is_active,
          is_admin=is_admin,
          is_staff=is_staff,
          emp_id=emp_id
        #   tc=tc,
      )
    


      user.set_password(password)
      user.save(using=self._db)
      return user

  def create_superuser(self, email, name ,is_admin=None,is_staff=None,is_active=None, password=None):
      """
      Creates and saves a superuser with the given email, name, and password.
      """
      user = self.create_user(
          email,
          password=password,
          name=name,
          is_active=is_active,  
          is_admin=is_admin,
          is_staff=is_staff,
          
        #   tc=tc,
      )
      user.is_active = True
      user.is_admin = True
      user.is_staff = True
      user.save(using=self._db)
      return user

#  Custom User Model
class User(AbstractBaseUser):
  email = models.EmailField(
      verbose_name='Email',
      max_length=255,
      unique=True,
  )
  
  name = models.CharField(max_length=200)
  emp_id=models.CharField(max_length=200,blank=True, null=True)
  is_active = models.BooleanField(blank=True, null=True)
  is_admin = models.BooleanField(blank=True, null=True)
  is_staff = models.BooleanField(blank=True, null=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)


  objects = UserManager()

  USERNAME_FIELD = 'email'
  REQUIRED_FIELDS = ['name']

  def __str__(self):
      return self.email

  def has_perm(self, perm, obj=None):
      "Does the user have a specific permission?"
      # Simplest possible answer: Yes, always
      return self.is_staff

  def has_perm(self, perm, obj=None):
      "Does the user have a specific permission?"
      # Simplest possible answer: Yes, always
      return self.is_admin

  def has_module_perms(self, app_label):
      "Does the user have permissions to view the app `app_label`?"
      # Simplest possible answer: Yes, always
      return True

#   @property
#   def is_staff(self):
#       "Is the user a member of staff?"
#       # Simplest possible answer: All admins are staff
#       return self.is_admin

def upload_path(instance, filname):
    return '/'.join(['photo', filname])

class Profile(models.Model):
    id= models.AutoField(primary_key=True)
    emp_id = models.ForeignKey('User',on_delete=models.CASCADE, db_column='emp_id')
    attacthment = models.ImageField(blank=True, null=False, upload_to=upload_path)
    first_name = models.CharField(max_length=15)
    middle_name = models.CharField(max_length=15, blank=True, null=True)
    last_name = models.CharField(max_length=15, blank=True, null=True)
    dob = models.DateField()
    gender = models.CharField(max_length=6)
    marital_status = models.CharField(max_length=11, blank=True, null=True)
    email_id = models.CharField(max_length=45, blank=True, null=True)
    phone_no = models.IntegerField()
    emergency_no = models.IntegerField(blank=True, null=True)
    blood_group = models.CharField(max_length=11, blank=True, null=True)
    highest_qualification = models.CharField(max_length=45, blank=True, null=True)
    pan_no = models.CharField(unique=True, max_length=11, blank=True, null=True)
    aadhar_no = models.IntegerField(unique=True, blank=True, null=True)
    present_address = models.TextField(blank=True, null=True)
    permanent_address = models.TextField(blank=True, null=True)
    designation = models.CharField(max_length=16, blank=True, null=True)
    department_name = models.CharField(max_length=45, blank=True, null=True)
    pf_account = models.CharField(max_length=45, blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True,auto_now_add=True)
    created_by = models.CharField(max_length=11, blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True,auto_now_add=True)

    class Meta:
   
        db_table = 'profile'
        unique_together = (('id', 'emp_id'))


class LeaveManagement(models.Model):
    lid = models.AutoField(primary_key=True)
    emp_id = models.ForeignKey('User',on_delete=models.CASCADE, db_column='emp_id')
    status = models.CharField(max_length=45, blank=True, null=True)
    first_name = models.CharField(max_length=45, blank=True, null=True)
    approver = models.CharField(max_length=45, blank=True, null=True)
    document = models.CharField(max_length=45, blank=True, null=True)
    leave_type = models.CharField(max_length=45, blank=True, null=True)
    leave_reason = models.TextField(blank=True, null=True)
    starting_date = models.DateField(blank=True, null=True)
    end_date = models.DateField(blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True,auto_now_add=True)
    created_by = models.IntegerField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True,auto_now_add=True)
    updated_by = models.IntegerField(blank=True, null=True,)

    class Meta:

        db_table = 'leave_management'



class Payroll(models.Model):
    id = models.AutoField(primary_key=True)
    emp_id = models.ForeignKey('User',on_delete=models.CASCADE, db_column='emp_id')
    first_name = models.CharField(max_length=45, blank=True, null=True)
    month = models.CharField(max_length=45, blank=True, null=True)
    payslip = models.CharField(max_length=45, blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True,auto_now_add=True)
    created_by = models.IntegerField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True,auto_now_add=True)
    updated_by = models.IntegerField(blank=True, null=True)

    class Meta:
    
        db_table = 'payroll'



class Appraisal(models.Model):
    id = models.AutoField(primary_key=True)
    emp_id = models.ForeignKey('User',on_delete=models.CASCADE, db_column='emp_id')
    employee_name = models.CharField(max_length=45, blank=True, null=True)
    year = models.TextField(blank=True, null=True)  # This field type is a guess.
    quarter = models.CharField(max_length=45, blank=True, null=True)
    goal = models.CharField(max_length=45, blank=True, null=True)
    goal_response = models.CharField(max_length=45, blank=True, null=True)
    kpi = models.CharField(max_length=45, blank=True, null=True)
    kpi_response = models.CharField(max_length=45, blank=True, null=True)
    rating = models.IntegerField(blank=True, null=True)
    jd = models.TextField(blank=True, null=True)
    kd = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True,auto_now_add=True)
    created_by = models.IntegerField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True,auto_now_add=True)
    updated_by = models.IntegerField(blank=True, null=True)     
    
    class Meta:

        db_table = 'appraisal'


class Dependents(models.Model):
    did = models.AutoField(primary_key=True)
    emp_id = models.ForeignKey('User',on_delete=models.CASCADE, db_column='emp_id')
    employee_name = models.CharField(max_length=45, blank=True, null=True)
    dependent_name = models.TextField(blank=True, null=True)
    relation = models.TextField(blank=True, null=True)
    status = models.CharField(max_length=45, blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)
    created_by = models.IntegerField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)

    class Meta:
  
        db_table = 'dependents'

def upload_path(instance, filname):
    return '/'.join(['Details', str(instance.File), filname])

class Fileupload(models.Model):
    File = models.CharField(max_length=32, blank=False)
    emp_id = models.ForeignKey('User',on_delete=models.CASCADE, db_column='emp_id')
    month = models.CharField(max_length=45, blank=False, null=False)
    Details = models.FileField(blank=True, null=False, upload_to=upload_path)


class Assets(models.Model):
    id = models.AutoField(primary_key=True)
    emp_id = models.ForeignKey('User',on_delete=models.CASCADE, db_column='emp_id')
    first_name = models.CharField(max_length=45, blank=True, null=True)
    asset = models.CharField(max_length=100, blank=True, null=True)
    status = models.CharField(max_length=45, blank=True, null=True)
    
    class Meta:
        db_table = 'assets'
        
class Empofmonth(models.Model):
    id = models.AutoField(primary_key=True)
    # emp_id = models.ForeignKey('User',on_delete=models.CASCADE, db_column='emp_id')
    first_name = models.CharField(max_length=45, blank=True, null=True)
    Empofmonth = models.CharField(max_length=100, blank=True, null=True)
    Empofyear = models.CharField(max_length=100, blank=True, null=True)
    class Meta:
        db_table = 'empofmonth'