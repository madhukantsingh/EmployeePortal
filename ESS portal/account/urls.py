from django.urls import path
from django.urls import re_path as url
from django.conf.urls.static import static
from django.conf import settings
# from . import views
from account.views import *

urlpatterns = [
    path('register/', UserRegistrationView.as_view(), name='register'),
    path('login/', UserLoginView.as_view(), name='login'),
    path('profile/', UserProfileView.as_view(), name='profile'),
    path('changepassword/', UserChangePasswordView.as_view(), name='changepassword'),
    path('send-reset-password-email/', SendPasswordResetEmailView.as_view(), name='send-reset-password-email'),
    path('reset-password/<uid>/<token>/', UserPasswordResetView.as_view(), name='reset-password'),
    
    
    path('userprofile/',PayrollApi.as_view()),
    url(r'^userprofile/([0-9]+)$',ProfileApi.as_view()),
    path('postprofile/',ProfilepostApi.as_view()),
    path('putprofile/',ProfileputApi.as_view()),
    path('postprofile/',ProfilepostApi.as_view()),
    url(r'^putprofile/([0-9]+)$',ProfileputApi.as_view()),
    url(r'^deleteprofile/([0-9]+)$',ProfiledeleteApi.as_view()),
    path('profilephoto/',Profilephoto.as_view()),
    url(r'^profilephoto/([0-9]+)$',Profilephoto.as_view()),
    
    
    path('leavemanagement/',LeaveManagementApi.as_view()),
    url(r'leavemanagement/([0-9]+)$',LeaveManagementApi.as_view()),
    path('postleave/',LeaveManagementpostApi.as_view()),
    url(r'postleave/([0-9]+)$',LeaveManagementpostApi.as_view()),
    path('putleave/',LeaveManagementputApi.as_view()),
    url(r'putleave/([0-9]+)$',LeaveManagementputApi.as_view()),

    path('appraisal/',AppraisalApi.as_view()),
    url(r'appraisal/([0-9]+)$',AppraisalApi.as_view()),
    path('postappraisal/',AppraisalpostApi.as_view()),
    url(r'postappraisal/([0-9]+)$',AppraisalpostApi.as_view()),
    path('putappraisal/',AppraisalputApi.as_view()),
    url(r'putappraisal/([0-9]+)$',AppraisalputApi.as_view()),
    url(r'^deleteappraisal/([0-9]+)$',Appraisaldelete.as_view()),

    path('dependents/',DependentsApi.as_view()),
    url(r'dependents/([0-9]+)$',DependentsApi.as_view()),
    path('postdependents/',DependentspostApi.as_view()),
    url(r'postdependents/([0-9]+)$',DependentspostApi.as_view()),
    path('applyDependent/',ApplyDependentsApi.as_view()),
    url(r'individualDependent/([0-9]+)$',IndividualDependents.as_view()),
    path('putdependents/',DependentsputApi.as_view()),
    url(r'putdependents/([0-9]+)$',DependentsputApi.as_view()),

    path('payroll/',PayrollApi.as_view()),
    url(r'payroll/([0-9]+)$',PayrollApi.as_view()),
    
    path('leavelist/',Leavelist.as_view()),
    url(r'leavelist/([0-9]+)$',Leavelist.as_view()),
    
     url(r'leavehistory/([0-9]+)$',Leavehistory.as_view()),
    # url(r'leave/([0-9]+)$',LeaveapproveApi.as_view()),

    path('applylist/',ApplyList.as_view()),
    url(r'applylist/([0-9]+)$',ApplyList.as_view()),
    url(r'leavelistcount/$',Leavelistcount.as_view()),


    url(r'^SaveFile/', SaveFileApi.as_view()),
    url(r'^Fileupload/', FileuploadSet.as_view()),
    url(r'Fileupload/([0-9]+)$',FileuploadSet.as_view()),
    url(r'^filelist/', filelist.as_view()),
    url(r'filelist/([0-9]+)$',filelist.as_view()),
    url(r'^payrolldown/', Payrolldownload.as_view()),
    url(r'payrolldown/([0-9]+)$',Payrolldownload.as_view()),
    url(r'individualleave/([0-9]+)$',Individualleave.as_view()),
    
    
    path('assetsget/',AssetsgetApi.as_view()),
    url(r'^assetsget/', AssetsgetApi.as_view()),
    url(r'assetsget/([0-9]+)$',AssetsgetApi.as_view()),
    url(r'^assetspost/', AssetspostApi.as_view()),
    url(r'assetspost/([0-9]+)$',AssetspostApi.as_view()),
    path('applyAssets/',ApplyAssetsApi.as_view()),
    url(r'individualAssets/([0-9]+)$',IndividualAssets.as_view()),
    path('putassets/',AsstesputApi.as_view()),
    url(r'putassets/([0-9]+)$',AsstesputApi.as_view()),

    url(r'^empmonth/', Empofmonthget.as_view()),
    url(r'empmonth/([0-9]+)$',Empofmonthget.as_view()),
    url(r'^empmonthpost/', Empofmonthhpost.as_view()),
    url(r'empmonthpost/([0-9]+)$',Empofmonthhpost.as_view()),

]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)