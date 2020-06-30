define({ "api": [
  {
    "type": "get",
    "url": "/users/activate-done/",
    "title": "Request activate-done page",
    "name": "ActivateDoneView",
    "group": "Users",
    "version": "0.0.0",
    "filename": "apps/users/views.py",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users/activate/encoded_uid/token",
    "title": "Request user activation",
    "name": "ActivateView",
    "group": "Users",
    "version": "0.0.0",
    "filename": "apps/users/views.py",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users/password-change-done/",
    "title": "Request password-change-done page",
    "name": "PasswordChangeDoneView",
    "group": "Users",
    "version": "0.0.0",
    "filename": "apps/users/views.py",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users/password-change/uid_encoded/token",
    "title": "Request password change page",
    "name": "PasswordChangeView",
    "group": "Users",
    "version": "0.0.0",
    "filename": "apps/users/views.py",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users/password-change/uid_encoded/token",
    "title": "Request password change page",
    "name": "PasswordChangeView",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password1",
            "description": "<p>User's new password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password2",
            "description": "<p>User's new password confirm.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "apps/users/views.py",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users/password-reset-done/",
    "title": "Request password-reset-done page",
    "name": "PasswordResetDoneView",
    "group": "Users",
    "version": "0.0.0",
    "filename": "apps/users/views.py",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users/password-reset/",
    "title": "Request password reset",
    "name": "PasswordResetView",
    "group": "Users",
    "version": "0.0.0",
    "filename": "apps/users/views.py",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users/password-reset/",
    "title": "Confirm password reset",
    "name": "PasswordResetView",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "apps/users/views.py",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users/register-done/",
    "title": "Request register-done page",
    "name": "RegisterDoneView",
    "group": "Users",
    "version": "0.0.0",
    "filename": "apps/users/views.py",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users/register/",
    "title": "Request registration page",
    "name": "RegisterView",
    "group": "Users",
    "version": "0.0.0",
    "filename": "apps/users/views.py",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users/register/",
    "title": "Request user registration",
    "name": "RegisterView",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>User's first_name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>User's last_name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User's username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "redirect",
            "description": "<p>to /users/register-done/</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "apps/users/views.py",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/wallets/:id/transactions/",
    "title": "Post Wallets Transactions",
    "name": "PostTransactions",
    "group": "Wallets",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Wallet unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "amount",
            "description": "<p>Transaction amount (can be negative).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "currency",
            "description": "<p>Currency id to transfer.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "apps/wallet/views.py",
    "groupTitle": "Wallets"
  }
] });