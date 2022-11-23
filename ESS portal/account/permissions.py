from rest_framework.permissions import BasePermission



class IsadminUser(BasePermission):
    def has_permission(self, request, view):

        return bool(request.user and request.user.is_admin)


class IsstaffUser(BasePermission):
    def has_permission(self, request, view):

        return bool(request.user and request.user.is_staff)