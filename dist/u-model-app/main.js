(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav></nav>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/clients/clients.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/clients/clients.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #registerModal let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Add New Client</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <form id=\"clientValidateForm\" nz-form [formGroup]=\"validateForm\" (ngSubmit)=\"onFormSubmit()\">\n    <div class=\"modal-body\">\n      <h5>Compamy Information</h5>\n      <nz-form-item>\n        <nz-form-label nzFor=\"um-company-name\" nzRequired>Company Name</nz-form-label>\n        <nz-form-control nzHasFeedback nzErrorTip=\"Please input company name\">\n          <input nz-input id=\"um-company-name\" [(ngModel)]=\"client.companyName\"\n            formControlName=\"companyName\" placeholder=\"Company name\" required/>\n        </nz-form-control>\n      </nz-form-item>\n      <nz-form-item>\n        <nz-form-label nzFor=\"um-contract-type\" nzRequired>Contract Type</nz-form-label>\n        <nz-form-control nzHasFeedback nzErrorTip=\"Please input contract type\">\n          <input nz-input id=\"um-contract-type\" [(ngModel)]=\"client.contractType\"\n            formControlName=\"contractType\" placeholder=\"Contract type\" required/>\n        </nz-form-control>\n      </nz-form-item>\n      <nz-form-item>\n        <nz-form-label nzFor=\"um-location\" nzRequired>Location</nz-form-label>\n        <nz-form-control nzHasFeedback nzErrorTip=\"Please input company location\">\n          <input nz-input id=\"um-location\" [(ngModel)]=\"client.location\"\n            formControlName=\"location\" placeholder=\"Location\" required/>\n        </nz-form-control>\n      </nz-form-item>\n      <div *ngIf=\"!isClientEdited\">\n        <br>\n        <hr>\n        <h5>Compamy Admin Email</h5>\n        <nz-form-item>\n          <nz-form-label nzFor=\"um-email\" nzRequired>Email</nz-form-label>\n          <nz-form-control nzHasFeedback nzErrorTip=\"Please input a valid email address\">\n            <input nz-input id=\"um-email\"  [(ngModel)]=\"user.email\"\n              formControlName=\"email\" placeholder=\"Enter email\" required/>\n          </nz-form-control>\n        </nz-form-item>  \n        <nz-form-item>\n          <nz-form-label nzRequired nzFor=\"um-email-confirm\">Confirm Email Address</nz-form-label>\n          <nz-form-control nzHasFeedback nzErrorTip=\"The input is not valid\">\n            <input nz-input id=\"um-email-confirm\"  [(ngModel)]=\"formFieldEmailConfirmation\"\n              formControlName=\"emailConfirmation\" placeholder=\"Enter email again\" required/>\n          </nz-form-control>\n        </nz-form-item>\n        <h5>Contact Information</h5>\n        <nz-form-item>\n          <nz-form-label nzRequired nzFor=\"um-contact-name\">First Name</nz-form-label>\n          <nz-form-control nzHasFeedback nzErrorTip=\"Please input firstname\">\n            <input nz-input id=\"um-contact-name\"  [(ngModel)]=\"user.firstName\"\n              formControlName=\"contactName\" placeholder=\"First name\" required/>\n          </nz-form-control>\n        </nz-form-item>\n        <nz-form-item>\n          <nz-form-label nzRequired nzFor=\"um-contact-last-name\">Last Name</nz-form-label>\n          <nz-form-control nzHasFeedback nzErrorTip=\"Please input lastname\">\n            <input nz-input id=\"um-contact-last-name\"  [(ngModel)]=\"user.lastName\"\n              formControlName=\"contactLastName\" placeholder=\"Last name\" required/>\n          </nz-form-control>\n        </nz-form-item>\n        <nz-form-item>\n          <nz-form-label  nzFor=\"phone\" nzRequired>Phone Number</nz-form-label>\n          <nz-form-control \n            nzHasFeedback\n            [nzValidateStatus]=\"validateForm.controls['phone']\"\n            nzErrorTip=\"Please input contact phone number\">\n            <nz-input-group [nzAddOnBefore]=\"addOnBeforeTemplate\">\n              <input nz-input formControlName=\"phone\" id=\"um-phone\" minlength=10 maxlength=10\n                placeholder=\"Contact phone\" [(ngModel)]=\"user.phone\" required/>\n              <ng-template #addOnBeforeTemplate>\n                <nz-select formControlName=\"phoneNumberPrefix\" class=\"phone-select\">\n                  <nz-option nzLabel=\"+1\" nzValue=\"+1\"></nz-option>\n                </nz-select>\n              </ng-template>\n            </nz-input-group>\n          </nz-form-control>\n        </nz-form-item>\n      </div>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"submit\" class=\"btn btn-light\">Save</button>\n    </div>\n  </form>\n</ng-template>\n\n<ng-template #editModal let-modal>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Edit Client Information</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <form id=\"clientValidateForm\" nz-form [formGroup]=\"validateForm\" (ngSubmit)=\"onFormSubmit()\">\n      <div class=\"modal-body\">\n        <h5>Compamy Information</h5>\n        <nz-form-item>\n          <nz-form-label nzFor=\"um-company-name\" nzRequired>Company Name</nz-form-label>\n          <nz-form-control nzHasFeedback nzErrorTip=\"Please input company name\">\n            <input nz-input id=\"um-company-name\" [(ngModel)]=\"client.companyName\"\n              formControlName=\"companyName\" placeholder=\"Company name\" required/>\n          </nz-form-control>\n        </nz-form-item>\n        <nz-form-item>\n          <nz-form-label nzFor=\"um-contract-type\" nzRequired>Contract Type</nz-form-label>\n          <nz-form-control nzHasFeedback nzErrorTip=\"Please input contract type\">\n            <input nz-input id=\"um-contract-type\" [(ngModel)]=\"client.contractType\"\n              formControlName=\"contractType\" placeholder=\"Contract type\" required/>\n          </nz-form-control>\n        </nz-form-item>\n        <nz-form-item>\n          <nz-form-label nzFor=\"um-location\" nzRequired>Location</nz-form-label>\n          <nz-form-control nzHasFeedback nzErrorTip=\"Please input company location\">\n            <input nz-input id=\"um-location\" [(ngModel)]=\"client.location\"\n              formControlName=\"location\" placeholder=\"Location\" required/>\n          </nz-form-control>\n        </nz-form-item>\n        <div *ngIf=\"!isClientEdited\">\n          <br>\n          <hr>\n          <h5>Compamy Admin Email</h5>\n          <nz-form-item>\n            <nz-form-label nzFor=\"um-email\" nzRequired>Email</nz-form-label>\n            <nz-form-control nzHasFeedback nzErrorTip=\"Please input a valid email address\">\n              <input nz-input id=\"um-email\"  [(ngModel)]=\"user.email\"\n                formControlName=\"email\" placeholder=\"Enter email\" required/>\n            </nz-form-control>\n          </nz-form-item>  \n          <nz-form-item>\n            <nz-form-label nzRequired nzFor=\"um-email-confirm\">Confirm Email Address</nz-form-label>\n            <nz-form-control nzHasFeedback nzErrorTip=\"The input is not valid\">\n              <input nz-input id=\"um-email-confirm\"  [(ngModel)]=\"formFieldEmailConfirmation\"\n                formControlName=\"emailConfirmation\" placeholder=\"Enter email again\" required/>\n            </nz-form-control>\n          </nz-form-item>\n          <h5>Contact Information</h5>\n          <nz-form-item>\n            <nz-form-label nzRequired nzFor=\"um-contact-name\">First Name</nz-form-label>\n            <nz-form-control nzHasFeedback nzErrorTip=\"Please input firstname\">\n              <input nz-input id=\"um-contact-name\"  [(ngModel)]=\"user.firstName\"\n                formControlName=\"contactName\" placeholder=\"First name\" required/>\n            </nz-form-control>\n          </nz-form-item>\n          <nz-form-item>\n            <nz-form-label nzRequired nzFor=\"um-contact-last-name\">Last Name</nz-form-label>\n            <nz-form-control nzHasFeedback nzErrorTip=\"Please input lastname\">\n              <input nz-input id=\"um-contact-last-name\"  [(ngModel)]=\"user.lastName\"\n                formControlName=\"contactLastName\" placeholder=\"Last name\" required/>\n            </nz-form-control>\n          </nz-form-item>\n          <nz-form-item>\n            <nz-form-label  nzFor=\"phone\" nzRequired>Phone Number</nz-form-label>\n            <nz-form-control \n              nzHasFeedback\n              [nzValidateStatus]=\"validateForm.controls['phone']\"\n              nzErrorTip=\"Please input contact phone number\">\n              <nz-input-group [nzAddOnBefore]=\"addOnBeforeTemplate\">\n                <input nz-input formControlName=\"phone\" id=\"um-phone\" minlength=10 maxlength=10\n                  placeholder=\"Contact phone\" [(ngModel)]=\"user.phone\" required/>\n                <ng-template #addOnBeforeTemplate>\n                  <nz-select formControlName=\"phoneNumberPrefix\" class=\"phone-select\">\n                    <nz-option nzLabel=\"+1\" nzValue=\"+1\"></nz-option>\n                  </nz-select>\n                </ng-template>\n              </nz-input-group>\n            </nz-form-control>\n          </nz-form-item>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"submit\" class=\"btn btn-light\">Save</button>\n      </div>\n    </form>\n  </ng-template>\n\n<ng-template #confirmationModal let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Delete Client</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>Are you sure you want to delete client <b>{{client.companyName}}</b>?</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.close('Close click')\">Cancel</button>\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"onClientDelete(confirmationModal)\">Delete</button>\n  </div>\n</ng-template>\n\n<div class=\"um-section\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <ngb-alert *ngIf=\"isAlertOpen\" type=\"success\" (close)=\"isAlertOpen = false\">{{ successMessage }}</ngb-alert>\n        <button class=\"um-btn--add btn btn-outline-info\" (click)=\"onAddClientModalOpen(registerModal)\">Add Client</button>\n        <table class=\"table\">\n          <thead class=\"thead-dark\">\n          <tr>\n            <th scope=\"col\">#</th>\n            <th scope=\"col\">Company Name</th>\n            <th scope=\"col\">Contract</th>\n            <th scope=\"col\">Member Since</th>\n            <th scope=\"col\">Location</th>\n            <th scope=\"col\">Models</th>\n            <th scope=\"col\">Actions</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr *ngFor=\"let client of allClients; index as i\">\n            <th scope=\"row\">{{i + 1}}</th>\n            <td><a [routerLink]=\"['/','profile', client.id,'eyeglasses']\"\n                    [queryParams]=\"{companyName:client.companyName}\">{{client.companyName}}</a>\n            </td>\n            <td>{{client.contractType}}</td>\n            <td>{{client.memberSince.getFullYear()}}</td>\n            <td>{{client.location}}</td>\n            <td>{{client.eyeglasses.length + \" Models\"}}</td>\n            <td>\n              <button nzTitle=\"Edit\" nz-button nz-tooltip\n                      class=\"um-btn--action btn btn-outline-warning\"\n                      (click)=\"onModalClientEditOpen(client, editModal)\">\n                <i class=\"fa fa-edit\"></i>\n              </button>\n              <button nzTitle=\"Delete\" nz-button nz-tooltip\n                      class=\"um-btn--action btn btn-outline-danger\"\n                      (click)=\"onModalClientDeleteOpen(client, confirmationModal)\">\n                <i class=\"fa fa-trash\"></i>\n              </button>\n            </td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/contacts/contacts.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contacts/contacts.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #registerModal let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Add new contact</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n\n  <form id=\"contactValidateForm\" nz-form [formGroup]=\"validateForm\" (ngSubmit)=\"onFormSubmit()\">\n    <div class=\"modal-body\">\n      <nz-form-item>\n        <nz-form-label nzRequired nzFor=\"um-first-name\">First Name</nz-form-label>\n        <nz-form-control nzHasFeedback nzErrorTip=\"Please input firstname\">\n          <input nz-input id=\"um-first-name\"  [(ngModel)]=\"contact.firstName\"\n            formControlName=\"firstName\" placeholder=\"First name\" required/>\n        </nz-form-control>\n      </nz-form-item>\n      <nz-form-item>\n        <nz-form-label nzRequired nzFor=\"um-last-name\">Last Name</nz-form-label>\n        <nz-form-control nzHasFeedback nzErrorTip=\"Please input lastname\">\n          <input nz-input id=\"um-last-name\"  [(ngModel)]=\"contact.lastName\"\n            formControlName=\"lastName\" placeholder=\"Last Name\" required/>\n        </nz-form-control>\n      </nz-form-item>\n      <nz-form-item>\n        <nz-form-label nzFor=\"um-email\" nzRequired>Email Address</nz-form-label>\n        <nz-form-control nzHasFeedback nzErrorTip=\"Please input a valid email address\">\n          <input nz-input id=\"um-email\"  [(ngModel)]=\"contact.email\"\n            formControlName=\"email\" placeholder=\"Enter email\" required/>\n        </nz-form-control>\n      </nz-form-item>\n      <nz-form-item>\n        <nz-form-label nzRequired nzFor=\"um-email-confirm\">Confirm Email address</nz-form-label>\n        <nz-form-control nzHasFeedback nzErrorTip=\"The input email is not valid\">\n          <input nz-input id=\"um-email-confirm\"  [(ngModel)]=\"formFieldEmailConfirmation\"\n            formControlName=\"emailConfirmation\" placeholder=\"Enter email again\" required/>\n        </nz-form-control>\n      </nz-form-item>\n      <nz-form-item>\n        <nz-form-label  nzFor=\"um-phone\" nzRequired>Phone Number</nz-form-label>\n        <nz-form-control \n          nzHasFeedback\n          [nzValidateStatus]=\"validateForm.controls['phone']\"\n          nzErrorTip=\"Please input contact phone number\">\n          <nz-input-group [nzAddOnBefore]=\"addOnBeforeTemplate\">\n            <input nz-input formControlName=\"phone\" id=\"um-phone\" minlength=10 maxlength=10\n              placeholder=\"Contact phone\" [(ngModel)]=\"contact.phone\" required/>\n            <ng-template #addOnBeforeTemplate>\n              <nz-select formControlName=\"phoneNumberPrefix\" class=\"phone-select\">\n                <nz-option nzLabel=\"+1\" nzValue=\"+1\"></nz-option>\n              </nz-select>\n            </ng-template>\n          </nz-input-group>\n        </nz-form-control>\n      </nz-form-item>\n      <nz-form-item>\n        <nz-form-label nzRequired nzFor=\"um-location\">Location</nz-form-label>\n        <nz-form-control nzHasFeedback nzErrorTip=\"Please input location\">\n          <input nz-input id=\"um-location\"  [(ngModel)]=\"contact.location\"\n            formControlName=\"location\" placeholder=\"Location\" required/>\n        </nz-form-control>\n      </nz-form-item>\n\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"submit\" class=\"btn btn-light\">Save</button>\n    </div>\n  </form>\n</ng-template>\n\n\n<ng-template #billingModal let-modal>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Add Billing Information</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <form id=\"billingValidateForm\" nz-form [formGroup]=\"billingValidateForm\" (ngSubmit)=\"onBillingFormSubmit()\">\n      <div class=\"modal-body\">\n        <nz-form-item>\n          <nz-form-label nzRequired nzFor=\"um-billing-type\">Billing Type</nz-form-label>\n          <nz-form-control nzHasFeedback nzErrorTip=\"Please input your billing type\">\n            <input nz-input id=\"um-billing-type\"  [(ngModel)]=\"billing.billingType\"\n              formControlName=\"billingType\" placeholder=\"Billing Type\" required/>\n          </nz-form-control>\n        </nz-form-item>\n        <h4>Account Receivables Information</h4>\n        <nz-form-item>\n            <nz-form-label nzRequired nzFor=\"um-first-name-rec\">First Name</nz-form-label>\n            <nz-form-control nzHasFeedback nzErrorTip=\"Please input receivables firstname\">\n              <input nz-input id=\"um-first-name-rec\"  [(ngModel)]=\"billing.firstNameRec\"\n                formControlName=\"firstNameRec\" placeholder=\"Receivables First Name\" required/>\n            </nz-form-control>\n          </nz-form-item>\n        <nz-form-item>\n          <nz-form-label nzRequired nzFor=\"um-last-name-rec\">Last Name</nz-form-label>\n          <nz-form-control nzHasFeedback nzErrorTip=\"Please input receivables lastname\">\n            <input nz-input id=\"um-last-name-rec\"  [(ngModel)]=\"billing.lastNameRec\"\n              formControlName=\"lastNameRec\" placeholder=\"Receivables Last Name\" required/>\n          </nz-form-control>\n        </nz-form-item>\n        <nz-form-item>\n          <nz-form-label nzFor=\"um-email-rec\" nzRequired>Email Address</nz-form-label>\n          <nz-form-control nzHasFeedback nzErrorTip=\"Please input a valid email address\">\n            <input nz-input id=\"um-email-rec\"  [(ngModel)]=\"billing.emailRec\"\n              formControlName=\"emailRec\" placeholder=\"Receivables Email\" required/>\n          </nz-form-control>\n        </nz-form-item>\n        <nz-form-item>\n          <nz-form-label nzRequired nzFor=\"um-email-confirm-rec\">Confirm Email address</nz-form-label>\n          <nz-form-control nzHasFeedback nzErrorTip=\"The input email is not valid\">\n            <input nz-input id=\"um-email-confirm-rec\"  [(ngModel)]=\"formFieldEmailConfirmationRec\"\n              formControlName=\"emailConfirmationRec\" placeholder=\"Enter Receivables Email Again\" required/>\n          </nz-form-control>\n        </nz-form-item>\n        <nz-form-item>\n          <nz-form-label  nzFor=\"um-phone-rec\" nzRequired>Receivables Phone Number</nz-form-label>\n          <nz-form-control \n            nzHasFeedback\n            [nzValidateStatus]=\"billingValidateForm.controls['phoneRec']\"\n            nzErrorTip=\"Please input receivables phone number\">\n            <nz-input-group [nzAddOnBefore]=\"addOnBeforeTemplate\">\n              <input nz-input formControlName=\"phoneRec\" id=\"um-phone-rec\" minlength=10 maxlength=10\n                placeholder=\"Receivables phone\" [(ngModel)]=\"billing.phoneRec\" required/>\n              <ng-template #addOnBeforeTemplate>\n                <nz-select formControlName=\"phoneNumberPrefixRec\" class=\"phone-select\">\n                  <nz-option nzLabel=\"+1\" nzValue=\"+1\"></nz-option>\n                </nz-select>\n              </ng-template>\n            </nz-input-group>\n          </nz-form-control>\n        </nz-form-item>\n        <h4>Account Payables Information</h4>\n        <nz-form-item>\n            <nz-form-label nzRequired nzFor=\"um-first-name-pay\">First Name</nz-form-label>\n            <nz-form-control nzHasFeedback nzErrorTip=\"Please input payables firstname\">\n              <input nz-input id=\"um-first-name-pay\"  [(ngModel)]=\"billing.firstNamePay\"\n                formControlName=\"firstNamePay\" placeholder=\"Payables First Name\" required/>\n            </nz-form-control>\n          </nz-form-item>\n        <nz-form-item>\n          <nz-form-label nzRequired nzFor=\"um-last-name-pay\">Last Name</nz-form-label>\n          <nz-form-control nzHasFeedback nzErrorTip=\"Please input payables lastname\">\n            <input nz-input id=\"um-last-name-pay\"  [(ngModel)]=\"billing.lastNamePay\"\n              formControlName=\"lastNamePay\" placeholder=\"Payables Last Name\" required/>\n          </nz-form-control>\n        </nz-form-item>\n        <nz-form-item>\n          <nz-form-label nzFor=\"um-email-pay\" nzRequired>Email Address</nz-form-label>\n          <nz-form-control nzHasFeedback nzErrorTip=\"Please input a valid email address\">\n            <input nz-input id=\"um-email-pay\"  [(ngModel)]=\"billing.emailPay\"\n              formControlName=\"emailPay\" placeholder=\"Payables Email\" required/>\n          </nz-form-control>\n        </nz-form-item>\n        <nz-form-item>\n          <nz-form-label nzRequired nzFor=\"um-email-confirm-pay\">Confirm Email address</nz-form-label>\n          <nz-form-control nzHasFeedback nzErrorTip=\"The input email is not valid\">\n            <input nz-input id=\"um-email-confirm-pay\"  [(ngModel)]=\"formFieldEmailConfirmationPay\"\n              formControlName=\"emailConfirmationPay\" placeholder=\"Enter Payables Email Again\" required/>\n          </nz-form-control>\n        </nz-form-item>\n        <nz-form-item>\n          <nz-form-label  nzFor=\"um-phone-pay\" nzRequired>Payables Phone Number</nz-form-label>\n          <nz-form-control \n            nzHasFeedback\n            [nzValidateStatus]=\"billingValidateForm.controls['phonePay']\"\n            nzErrorTip=\"Please input payables phone number\">\n            <nz-input-group [nzAddOnBefore]=\"addOnBeforeTemplate\">\n              <input nz-input formControlName=\"phonePay\" id=\"um-phone-pay\" minlength=10 maxlength=10\n                placeholder=\"Payables phone\" [(ngModel)]=\"billing.phonePay\" required/>\n              <ng-template #addOnBeforeTemplate>\n                <nz-select formControlName=\"phoneNumberPrefixPay\" class=\"phone-select\">\n                  <nz-option nzLabel=\"+1\" nzValue=\"+1\"></nz-option>\n                </nz-select>\n              </ng-template>\n            </nz-input-group>\n          </nz-form-control>\n        </nz-form-item>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"submit\" class=\"btn btn-light\">Save</button>\n      </div>\n    </form>\n  </ng-template>\n\n<ng-template #confirmationModal let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Delete client</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>Are you sure you want to delete client <b>{{contact.firstName}} {{contact.lastName}}</b>?</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.close('Close click')\">Close</button>\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteContact()\">Delete</button>\n  </div>\n</ng-template>\n\n<ng-template #billingConfirmationModal let-modal>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Delete billing information</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <p>Are you sure you want to delete the billing information?</p>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.close('Close click')\">Close</button>\n      <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteBilling()\">Delete</button>\n    </div>\n  </ng-template>\n\n\n<div class=\"um-section\">\n  <div class=\"container\">\n    <ngb-alert *ngIf=\"isAlertOpen\" type=\"success\" (close)=\"isAlertOpen = false\">{{ alertMessage }}</ngb-alert>    \n    <button class=\"um-btn um-btn--submit btn\" \n            (click)=\"onAddContactModalOpen(registerModal)\">Add Contacts</button>\n    <button *ngIf=\"billingList.length == 0\"\n            class=\"um-btn um-btn--submit btn\" \n            (click)=\"onAddBillingModalOpen(billingModal)\">Add Billing Information</button>\n\n    <div class=\"row\">\n      <div *ngFor=\"let contact of contactList\" >\n        <nz-card style=\"width:300px;\" [nzActions]=\"[actionEdit, actionDelete]\" class=\"contact-card\">\n            <h3>{{contact.firstName}} {{contact.lastName}}</h3>\n            <p>{{contact.location}}</p>\n            <p>{{contact.phone}} | {{contact.email}}</p>\n          </nz-card>\n          <ng-template #actionEdit>\n            <i nz-icon nzType=\"edit\"\n                (click)=\"onEditContactModalOpen(registerModal, contact)\"></i>\n          </ng-template>\n          <ng-template #actionDelete>\n            <i nz-icon nzType=\"delete\"\n                (click)=\"onDeleteContactModalOpen(confirmationModal, contact)\"></i>\n          </ng-template>\n      </div>\n\n      <div *ngFor=\"let billing of billingList\" >\n          <nz-card style=\"width:300px;\" [nzActions]=\"[actionEdit, actionDelete]\" class=\"billing-card\">\n              <h3>Billing Information</h3>\n              <p>Payables: {{billing.firstNamePay}} {{billing.lastNamePay}}</p>\n              <p>{{billing.phonePay}} | {{billing.emailPay}}</p>\n              <p>Receivables: {{billing.firstNameRec}} {{billing.lastNameRec}} </p>\n              <p>{{billing.phoneRec}} | {{billing.emailRec}}</p>\n          </nz-card>\n          <ng-template #actionEdit>\n              <i nz-icon nzType=\"edit\"\n                  (click)=\"onEditBillingModalOpen(billingModal, billing)\"></i>\n            </ng-template>\n            <ng-template #actionDelete>\n              <i nz-icon nzType=\"delete\"\n                  (click)=\"onDeleteBillingModalOpen(billingConfirmationModal, billing)\"></i>\n            </ng-template>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/demo/demo.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demo/demo.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"um-section\">\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\" [routerLink]=\"['/']\">\n      <i class=\"fa fa-angle-left\"></i> Back\n    </a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\"\n            aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\">Eyeglasses <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\">Sunglasses</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\">Collections</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link disabled\" href=\"#\" tabindex=\"-1\" aria-disabled=\"true\">About us</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-6\">\n        <div class=\"d-flex align-items-center\">\n          <img src=\"/assets/images/demo_glasses.jpg\" alt=\"glasses\" class=\"img-fluid\">\n        </div>\n      </div>\n      <div class=\"col-6\">\n        <div class=\"d-flex align-items-center flex-column justify-content-around\">\n          <h1 class=\"um-title\">Model 1</h1>\n          <h2 class=\"um-subtitle\">$100</h2>\n          <div class=\"um-section--buttons\">\n            <button class=\"btn btn-dark\">Buy</button>\n            <button class=\"btn btn-dark\" (click)=\"showPopup()\">Try it on!</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/eyeglass/eyeglass.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/eyeglass/eyeglass.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #eyeglassModal let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Add New Eyewear Model</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <form id=\"eyeglassValidateForm\" nz-form [formGroup]=\"validateForm\"  (ngSubmit)=\"onFormSubmit()\">\n    <div class=\"modal-body\">\n      <nz-form-item>\n        <nz-form-label nzFor=\"um-model\" nzRequired>Model Name</nz-form-label>\n        <nz-form-control nzHasFeedback nzErrorTip=\"Please input model name\">\n          <input nz-input id=\"um-model\" [(ngModel)]=\"eyeglass.model\"\n            formControlName=\"model\" placeholder=\"Model name\" required/>\n        </nz-form-control>\n      </nz-form-item>\n      <nz-form-item>\n        <nz-form-label nzFor=\"um-upc\" nzRequired>UPC</nz-form-label>\n        <nz-form-control nzHasFeedback nzErrorTip=\"Please input valid model UPC\">\n          <input nz-input id=\"um-upc\" [(ngModel)]=\"eyeglass.upc\" maxlength=\"12\" minlength=\"12\"\n            formControlName=\"upc\" placeholder=\"UPC#\" required/>\n        </nz-form-control>\n      </nz-form-item>\n      <nz-form-item>\n        <nz-form-label nzFor=\"um-brand\" nzRequired>Brand</nz-form-label>\n        <nz-form-control nzHasFeedback nzErrorTip=\"Please input model brand\">\n          <input nz-input id=\"um-brand\" [(ngModel)]=\"eyeglass.brand\"\n            formControlName=\"brand\" placeholder=\"Model brand\" required/>\n        </nz-form-control>\n      </nz-form-item>\n      <nz-form-item>\n        <nz-form-label nzFor=\"um-size\" nzRequired>Model Size</nz-form-label>\n        <nz-form-control nzHasFeedback nzErrorTip=\"Please input model size\">\n          <input type=\"text\" nz-input id=\"um-size\" \n            maxlength=\"9\" minlength=\"9\" min=\"0\" max=\"9\" [(ngModel)]=\"eyeglass.size\"\n            formControlName=\"size\" placeholder=\"Size: please input 7 digit number\" required\n            (ngModelChange)=\"onChange($event)\"/>\n        </nz-form-control>\n      </nz-form-item>\n      <nz-form-item>\n        <nz-form-label nzFor=\"um-info\">Other Info</nz-form-label>\n          <input nz-input id=\"um-info\" [(ngModel)]=\"eyeglass.info\"\n            formControlName=\"info\" placeholder=\"Other info...\"/>\n      </nz-form-item>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"submit\" class=\"btn btn-light\">Save</button>\n    </div>\n  </form>\n</ng-template>\n\n<ng-template #editEyeglassModal let-modal>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Edit Eyewear Model</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <form id=\"eyeglassValidateForm\" nz-form [formGroup]=\"validateForm\"  (ngSubmit)=\"onFormSubmit()\">\n      <div class=\"modal-body\">\n        <nz-form-item>\n          <nz-form-label nzFor=\"um-model\" nzRequired>Model Name</nz-form-label>\n          <nz-form-control nzHasFeedback nzErrorTip=\"Please input model name\">\n            <input nz-input id=\"um-model\" [(ngModel)]=\"eyeglass.model\"\n              formControlName=\"model\" placeholder=\"Model name\" required/>\n          </nz-form-control>\n        </nz-form-item>\n        <nz-form-item>\n          <nz-form-label nzFor=\"um-upc\" nzRequired>UPC</nz-form-label>\n          <nz-form-control nzHasFeedback nzErrorTip=\"Please input valid model UPC\">\n            <input nz-input id=\"um-upc\" [(ngModel)]=\"eyeglass.upc\" maxlength=\"12\" minlength=\"12\"\n              formControlName=\"upc\" placeholder=\"UPC#\" required/>\n          </nz-form-control>\n        </nz-form-item>\n        <nz-form-item>\n          <nz-form-label nzFor=\"um-brand\" nzRequired>Brand</nz-form-label>\n          <nz-form-control nzHasFeedback nzErrorTip=\"Please input model brand\">\n            <input nz-input id=\"um-brand\" [(ngModel)]=\"eyeglass.brand\"\n              formControlName=\"brand\" placeholder=\"Model brand\" required/>\n          </nz-form-control>\n        </nz-form-item>\n        <nz-form-item>\n          <nz-form-label nzFor=\"um-size\" nzRequired>Model Size</nz-form-label>\n          <nz-form-control nzHasFeedback nzErrorTip=\"Please input model size\">\n            <input type=\"text\" nz-input id=\"um-size\" \n              maxlength=\"9\" minlength=\"9\" min=\"0\" max=\"9\" [(ngModel)]=\"eyeglass.size\"\n              formControlName=\"size\" placeholder=\"Size: please input 7 digit number\" required\n              (ngModelChange)=\"onChange($event)\"/>\n          </nz-form-control>\n        </nz-form-item>\n        <nz-form-item>\n          <nz-form-label nzFor=\"um-info\">Other Info</nz-form-label>\n            <input nz-input id=\"um-info\" [(ngModel)]=\"eyeglass.info\"\n              formControlName=\"info\" placeholder=\"Other info...\"/>\n        </nz-form-item>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"submit\" class=\"btn btn-light\">Save</button>\n      </div>\n    </form>\n  </ng-template>\n\n<ng-template #confirmationModal let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Delete Eyeglass Model</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>Are you sure you want to delete the eyeglass model <b>{{eyeglass.model}}</b>?</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.close('Close click')\">Cancel</button>\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"DeleteEyeglass()\">Delete</button>\n  </div>\n</ng-template>\n\n<div class=\"um-section\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <ngb-alert *ngIf=\"isAlertOpen\" type=\"success\" (close)=\"isAlertOpen = false\">{{ alertMessage }}</ngb-alert>\n        <h3>{{this.companyName}}</h3>\n        <button class=\"um-btn--add btn btn-outline-info\" (click)=\"onAddEyeglassModalOpen(eyeglassModal)\">Add Eyeglass</button>\n        <table class=\"table\">\n          <thead class=\"thead-dark\">\n          <tr>\n            <th scope=\"col\">#</th>\n            <th scope=\"col\">Model Name</th>\n            <th scope=\"col\">UPC</th>\n            <th scope=\"col\">Brand</th>\n            <th scope=\"col\">Model Size</th>\n            <th scope=\"col\">Others</th>\n            <th scope=\"col\">Actions</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr *ngFor=\"let eyeglass of eyeglasses; index as i\">\n            <th scope=\"row\">{{i + 1}}</th>\n            <td><a [routerLink]=\"['/','profile', this.clientId, eyeglass.id, 'types']\"\n                    [queryParams]=\"{upc:eyeglass.upc}\">{{eyeglass.model}}</a>\n            </td>\n            <td>{{eyeglass.upc}}</td>\n            <td>{{eyeglass.brand}}</td>\n            <td>{{eyeglass.size}}</td>\n            <td>{{eyeglass.info}}</td>\n            <td>\n              <button nzTitle=\"Edit\" nz-button nz-tooltip\n                      [disabled]=\"!this.eyeglass.btnAct\"\n                      class=\"um-btn--action btn btn-outline-warning\"\n                      (click)=\"onEditEyeglassModalOpen(eyeglass, editEyeglassModal)\">\n                <i class=\"fa fa-edit\"></i>\n              </button>\n              <button nzTitle=\"Deactivate\" nz-button nz-tooltip\n                      [disabled]=\"!this.eyeglass.btnAct\"\n                      (click)=\"disableBtn(eyeglass)\"\n                      class=\"um-btn--action btn btn-outline-info\">\n                <i class=\"fa fa-eye-slash\"></i>\n              </button>\n              <button nzTitle=\"Activate\" nz-button nz-tooltip\n                      [disabled]=\"this.eyeglass.btnAct\"\n                      (click)=\"disableBtn(eyeglass)\"\n                      class=\"um-btn--action btn btn-outline-info\">\n                <i class=\"fa fa-eye\"></i>\n              </button>\n              <button nzTitle=\"Delete\" nz-button nz-tooltip\n                      [disabled]=\"!this.eyeglass.btnAct\"\n                      class=\"um-btn--action btn btn-outline-danger\"\n                      (click)=\"onDeleteEyeglassModalOpen(eyeglass, confirmationModal)\">\n                <i class=\"fa fa-trash\"></i>\n              </button>\n            </td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light sticky-top\" (scroll)=\"scrollMe($event)\">\n  <a class=\"navbar-brand\" href=\"#\">\n    <img class=\"img-fluid\" src=\"/assets/images/naik-ar-logo.png\" alt=\"logo\" [@scrollAnimation]=\"state\">\n  </a>\n  <span class=\"um-header-text\"> Making Virtual Fitting A Reality</span>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n          aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav um-navbar justify-content-end\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [ngx-scroll-to]=\"about\">About Us</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [ngx-scroll-to]=\"products\">Products</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [ngx-scroll-to]=\"demo\">Try it!</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [ngx-scroll-to]=\"contact\">Contact Us</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['profile/login']\">LogIn</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n<div class=\"um-section um-section--about\" #about>\n  <div class=\"container\">\n    <div class=\"row h-100\">\n      <div class=\"col-12 col-md-6 d-flex flex-column justify-content-center align-items-center\">\n        <div class=\"um-img--circle um-img--about-us\"></div>\n      </div>\n      <div class=\"col-12 col-md-6 d-flex flex-column justify-content-center align-items-center\">\n        <h1 class=\"um-title\">About Us</h1>\n        <p class=\"um-text\">\n          At Naik AR we are trying to utilize Augmented Reality and 3D modeling in order to enhance online shopping\n          experience for consumers. The developed technology is utilized for virtual fitting of products on ecommerce\n          websites. The web-based nature and its simple integration into existing e-commerce websites makes this\n          technology viable for enhancing the everyday online consumer behavior.\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"um-section um-section--products\" #products>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12 col-sm-6 d-flex flex-column align-items-center justify-content-center\">\n        <h1 class=\"um-title\">U - Model</h1>\n        <p class=\"um-text\">\n          U-Model is a web-based platform that enables live fitting of eyewear on e-commerce websites using any device\n          (laptop, tablet and mobile). U-Model gives the experience of fitting and trying on glasses virtually while\n          shopping online.\n        </p>\n      </div>\n      <div class=\"col-12 col-sm-5 offset-md-1 d-flex flex-column align-items-center justify-content-center\">\n        <div class=\"um-img--glasses\"></div>\n      </div>\n    </div>\n    <div class=\"row um-section--products__info d-flex align-items-center\">\n      <div class=\"col-12 col-sm-6\">\n        <div class=\"um-box-container um-background--image-1\">\n          <div class=\"um-box-container__title um-title\">What?</div>\n          <div class=\"um-box-container__text um-text\">\n            <ul>\n              <li>Enables live fitting of eyewear</li>\n              <li>Accessible through the e-commerce website</li>\n              <li>Web based platform</li>\n              <li>Connects directly to the e-commerce website</li>\n              <li>Option of uploading an image to fit on</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-12 col-sm-6\">\n        <div class=\"um-box-container um-background--image-2\">\n          <div class=\"um-box-container__title um-title\">How?</div>\n          <div class=\"um-box-container__text um-text\">\n            <ul>\n              <li>Simple incorporation of up to 8 lines of script in the existing website</li>\n              <li>Platform automatically accessed via a “Try On” button</li>\n              <li>Generates realistic 3D models of eyewear via images provided</li>\n              <li>Want to know more? Connect with us!</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-12 col-sm-6 offset-sm-3\">\n        <div class=\"um-box-container um-background--image-3\">\n          <div class=\"um-box-container__title um-title\">Why?</div>\n          <div class=\"um-box-container__text um-text\">\n            <ul>\n              <li>To enhance the consumer experience</li>\n              <li>To incorporate innovative technology into online shopping, with minimal effort</li>\n              <li>To decrease the cost of returns due to lack of fitting capabilities</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n<div class=\"um-section um-section--demo\" #demo>\n  <div class=\"container\">\n    <div class=\"row h-100\">\n      <div class=\"col d-flex flex-column align-items-center justify-content-center\">\n        <h1 class=\"um-title\">\n          Try it yourself by visiting the demo website\n        </h1>\n        <a [routerLink]=\"['/demo']\" class=\"um-btn\">Try it</a>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"um-section um-section--contact\" #contact>\n  <div class=\"um-background-layer\">\n    <div class=\"container\">\n      <h1 class=\"um-title\">Contact us</h1>\n      <div class=\"row d-flex align-items-center justify-content-center\">\n        <form class=\"col col-md-6\" action=\"\">\n          <div class=\"form-group\">\n            <label for=\"um-contact-form__name\">Name</label>\n            <input class=\"form-control\" type=\"text\" placeholder=\"Name\" id=\"um-contact-form__name\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"um-contact-form__email\">Email</label>\n            <input class=\"form-control\" type=\"email\" placeholder=\"Email\" id=\"um-contact-form__email\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"um-contact-form__company\">Company / Organization</label>\n            <input class=\"form-control\" type=\"text\" placeholder=\"Company / Organization\" id=\"um-contact-form__company\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"um-contact-form__message\">Message</label>\n            <textarea class=\"form-control\" name=\"comment\" cols=\"30\" rows=\"10\" id=\"um-contact-form__message\"></textarea>\n          </div>\n          <input type=\"submit\" class=\"form-control btn um-btn--submit\" value=\"Send\">\n        </form>\n\n      </div>\n\n    </div>\n  </div>\n</div>\n<footer class=\"um-section um-section--footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col\">\n        Rights reserved to Naik AR\n      </div>\n      <div class=\"col\">\n      </div>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/image/image.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/image/image.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #imageModal let-modal>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Add New Image</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <form #imageForm='ngForm' (ngSubmit)=\"onFormSubmit(imageForm)\">\n      <div class=\"modal-body\">\n        <div class=\"form-group\">\n          <label for=\"um-model\">Image Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"um-model\" name=\"name\"\n                 placeholder=\"Model Name\" [(ngModel)]=\"image.imageName\" required>\n        </div>\n        <br>\n        <div class=\"my-1\">\n          <div class=\"center\">\n            <div>\n              <button mat-button type=\"button\" #chooseFileBtn (click)='filePicker.click()'>Pick Image</button>\n              <input type=\"file\" class=\"form-control\" #filePicker name=\"image\"\n                (change)=\"onImagePicked($event)\" required>\n            </div>\n            <div class=\"upload-table\" #uploadedFile *ngIf=\"imagePreview !== '' && imagePreview\">\n              <table class=\"table\">\n                <thead>\n                <p>Uploaded files:</p>\n                </thead>\n                <tbody class=\"upload-name-style\">\n                <tr *ngFor=\"let item of allFiles; let i=index\">\n                  <td><strong>{{ item.name }}</strong>\n                    <div class='imagePreview' *ngIf=\"imagePreview !== '' && imagePreview\" >\n                      <img #selectPreview [src]=\"imagePreview\">\n                    </div>\n                  </td>\n                </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"submit\" class=\"btn btn-light\">Save</button>\n      </div>\n    </form>\n  </ng-template>\n\n<ng-template #confirmationImage let-modal>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Delete Image</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <p>Are you sure you want to delete this image <b>{{image.imageName}}</b>?</p>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.close('Close click')\">Cancel</button>\n      <button type=\"button\" class=\"btn btn-danger\" (click)=\"DeleteImage()\">Delete</button>\n    </div>\n  </ng-template>\n\n<div class=\"um-section\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <ngb-alert *ngIf=\"isAlertOpen\" type=\"success\" (close)=\"isAlertOpen = false\">{{ alertMessage }}</ngb-alert>\n        <button class=\"um-btn--add btn btn-outline-info\" (click)=\"onAddImageOpen(imageModal)\">Upload Image</button>\n        <table class=\"table\">\n          <thead class=\"thead-dark\">\n          <tr>\n            <th scope=\"col\">#</th>\n            <th scope=\"col\">Image Name</th>\n            <th scope=\"col\">Click to Preview Images</th>\n            <th scope=\"col\">Actions</th>\n          </tr>\n          </thead>\n          <tbody *ngIf=\"images.length > 0\">\n          <tr *ngFor=\"let image of images; index as i\">\n            <th scope=\"row\">{{i + 1}}</th>\n            <td>{{image.imageName}}</td>\n            <td>\n              <div>\n                  <img\n                  [lightbox]=\"i+1\"\n                  [gallery]=\"'anotherLightbox'\"\n                  [src]=\"image.imagePreview\"\n                  id=\"inLinePreviewImg\">\n              </div>\n            </td>\n            <td>\n              <button class=\"um-btn--action btn btn-outline-info\"\n                      (click)=\"onDeleteImageOpen(image, confirmationImage)\">\n                <i class=\"fa fa-trash\"></i>\n              </button>\n            </td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n    <div *ngIf='images.length<=0' id=\"noImgNotice\">\n      <h5>No image uploaded</h5>\n    </div>\n    <div>\n      <h5>preview 3d-model</h5>\n      <stl-model-viewer stlModel=\"src/assets/face.stl\"></stl-model-viewer>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"um-section\">\n  <div class=\"container\">\n    <div class=\"row h-100 align-items-center justify-content-center\">\n      <div class=\"col col-sm-12 col-md-6\">\n        <ngb-alert *ngIf=\"isAlertOpen\" type=\"danger\" (close)=\"isAlertOpen = false\">{{ alertMessage }}</ngb-alert>\n        <form #loginForm='ngForm' (ngSubmit)=\"onLogin()\">\n          <div class=\"form-group\">\n            <span class=\"um-form-icon\"><i class=\"fa fa-user\"></i></span>\n            <input required [(ngModel)]=\"user.email\" type=\"email\" class=\"form-control\" placeholder=\"Email\" name=\"user\">\n          </div>\n          <div class=\"form-group\">\n            <span class=\"um-form-icon\"><i class=\"fa fa-lock\"></i></span>\n            <input required [(ngModel)]=\"user.password\" type=\"password\" class=\"form-control\" placeholder=\"Password\"\n                   name=\"password\">\n          </div>\n          <div>\n            <a [routerLink]=\"\" class=\"um-options small\">Forgot you password?</a><br>\n            <input type=\"submit\" class=\"um-btn um-btn--submit\" value=\"LogIn\" [disabled]=\"!loginForm.form.valid\"><br>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navbar/navbar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light fixed-top\">\n  <a class=\"navbar-brand\" routerLink=\"/\">\n    <img class=\"img-fluid\" src=\"/assets/images/naik-ar-logo.png\" alt=\"logo\">\n  </a>\n  <span class=\"um-header-text\"> Making Virtual Fitting A Reality</span>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n          aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav um-navbar justify-content-end\">\n      <li *ngFor=\"let item of navItems\" class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"item.link\">{{item.name}}</a>\n      </li>\n      <li *ngIf=\"sessionService.hasLogin()\" class=\"nav-item\">\n        <a class=\"nav-link\" (click)=\"logout()\">Logout</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/profile.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/profile.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/type/type.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/type/type.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #typeModal let-modal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Add Type</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n\n    <form id=\"typeValidateForm\" nz-form [formGroup]=\"validateForm\"  (ngSubmit)=\"onFormSubmit()\">\n        <div class=\"modal-body\">\n        <nz-form-item>\n            <nz-form-label nzFor=\"um-colorupc\" nzRequired>UPC</nz-form-label>\n            <nz-form-control nzHasFeedback nzErrorTip=\"Please input valid type UPC number\">\n            <input nz-input id=\"um-colorupc\" [(ngModel)]=\"type.colorupc\" maxlength=\"12\" minlength=\"12\"\n                formControlName=\"colorupc\" placeholder=\"UPC#\" required/>\n            </nz-form-control>\n        </nz-form-item>\n\n        <nz-form-item>\n            <nz-form-label nzFor=\"um-color\" nzRequired>Color</nz-form-label>\n            <nz-form-control nzHasFeedback nzErrorTip=\"Please input color\">\n            <input nz-input id=\"um-color\" [(ngModel)]=\"type.color\"\n                formControlName=\"color\" placeholder=\"Type color\" required/>\n            </nz-form-control>\n        </nz-form-item>\n\n        <nz-form-item>\n            <nz-form-label nzFor=\"um-size\" nzRequired>Model Size</nz-form-label>\n            <nz-form-control nzHasFeedback nzErrorTip=\"Please input valid model size\">\n            <input type=\"text\" nz-input id=\"um-size\" \n                [(ngModel)]=\"type.size\" maxlength=\"9\" minlength=\"9\" min=\"0\" max=\"9\"\n                formControlName=\"size\" placeholder=\"Size: please input 7 digit number\" required\n                (ngModelChange)=\"onChange($event)\"/>\n            </nz-form-control>\n        </nz-form-item>\n\n        </div>\n        <div class=\"modal-footer\">\n        <button type=\"submit\" class=\"btn btn-light\">Save</button>\n        </div>\n    </form>\n</ng-template>\n\n<ng-template #confirmationModal let-modal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Delete Color Type</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <p>Are you sure you want to delete the type model <b>{{type.colorupc}}</b>?</p>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.close('Close click')\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"DeleteType()\">Delete</button>\n    </div>\n</ng-template>\n\n\n<div class=\"um-section\">\n    <div class=\"container\">\n        <div class=\"row\">\n        <div class=\"col\">\n            <ngb-alert *ngIf=\"isAlertOpen\" type=\"success\" (close)=\"isAlertOpen = false\">{{ alertMessage }}</ngb-alert>\n            <h3>{{this.upc}}</h3>\n            <button class=\"um-btn--add btn btn-outline-info\" (click)=\"onAddTypeModalOpen(typeModal)\">Add Type</button>\n            <table class=\"table\">\n            <thead class=\"thead-dark\">\n            <tr>\n                <th scope=\"col\">#</th>\n                <th scope=\"col\">UPC</th>\n                <th scope=\"col\">Color</th>\n                <th scope=\"col\">Model Size</th>\n                <th scope=\"col\">Images</th>\n                <th scope=\"col\">3D Model</th>\n                <th scope=\"col\">Actions</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let type of types; index as i\">\n                <th scope=\"row\">{{i + 1}}</th>\n                <td>{{type.colorupc}}</td>\n                <td>{{type.color}}</td>\n                <td>{{type.size}}</td>\n                <td>\n                    <nz-upload\n                        nzName=\"abc\"\n                        nzAction=\"http://localhost:3000/api/gcs/{{type.client}}/{{type.eyeglass}}/{{type.colorupc}}\"\n                        nzListType=\"picture-card\"\n                        [(nzFileList)]=\"type.images\"\n                        [nzShowButton]=\"type.images.length < 4\"\n                        [nzShowUploadList]=\"showUploadList\"\n                        [nzPreview]=\"handlePreview\"\n                        (nzChange)=\"upLoadChange($event, type)\">\n                        <i nz-icon nzType=\"plus\"></i>\n                        <div class=\"ant-upload-text\">Upload</div>\n                    </nz-upload>\n                    <nz-modal\n                        [nzVisible]=\"previewVisible\"\n                        [nzContent]=\"modalContent\"\n                        [nzFooter]=\"null\"\n                        (nzOnCancel)=\"previewVisible = false\">\n                        <ng-template #modalContent>\n                            <img [src]=\"previewImage\" [ngStyle]=\"{ width: '100%' }\" />\n                        </ng-template>\n                    </nz-modal>        \n                </td>\n                <td>{{'preview model'}}</td>\n                <td>\n                    <button nzTitle=\"Download Images\" nz-button nz-tooltip\n                            class=\"um-btn--action btn btn-outline-danger\"\n                            (click)=\"onDownloadTypeImagesOpen(type)\">\n                        <i class=\"fa fa-download\"></i>\n                    </button>\n                    <button nzTitle=\"Download Model\" nz-button nz-tooltip\n                            class=\"um-btn--action btn btn-outline-danger\"\n                            (click)=\"onDownloadTypeModelOpen(type)\">\n                        <i class=\"fa fa-download\"></i>\n                    </button>\n                    <button nzTitle=\"Delete\" nz-button nz-tooltip\n                            class=\"um-btn--action btn btn-outline-danger\"\n                            (click)=\"onDeleteTypeModalOpen(type, confirmationModal)\">\n                        <i class=\"fa fa-trash\"></i>\n                    </button>\n                </td>\n            </tr>\n            </tbody>\n            </table>\n        </div>\n        </div>\n    </div>\n</div>\n      "

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _demo_demo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./demo/demo.component */ "./src/app/demo/demo.component.ts");
/* harmony import */ var _clients_clients_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clients/clients.component */ "./src/app/clients/clients.component.ts");
/* harmony import */ var _eyeglass_eyeglass_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./eyeglass/eyeglass.component */ "./src/app/eyeglass/eyeglass.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contacts/contacts.component */ "./src/app/contacts/contacts.component.ts");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/auth.guard */ "./src/app/services/auth.guard.ts");
/* harmony import */ var _user_role__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/role */ "./src/app/user/role.ts");
/* harmony import */ var _type_type_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./type/type.component */ "./src/app/type/type.component.ts");













var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'demo', component: _demo_demo_component__WEBPACK_IMPORTED_MODULE_5__["DemoComponent"] },
    {
        path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"],
        children: [
            { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
            { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
            { path: 'clients', component: _clients_clients_component__WEBPACK_IMPORTED_MODULE_6__["ClientsComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]], data: { roles: [_user_role__WEBPACK_IMPORTED_MODULE_11__["Role"].Admin] } },
            { path: ':client_id/contacts', component: _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_9__["ContactsComponent"] },
            { path: ':client_id/eyeglasses', component: _eyeglass_eyeglass_component__WEBPACK_IMPORTED_MODULE_7__["EyeglassComponent"] },
            { path: ':client_id/:eyeglass_id/types', component: _type_type_component__WEBPACK_IMPORTED_MODULE_12__["TypeComponent"] },
        ]
    },
    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.styl":
/*!************************************!*\
  !*** ./src/app/app.component.styl ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*# sourceMappingURL=src/app/app.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9EQUFvRCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc3R5bCJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'u-model-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.styl */ "./src/app/app.component.styl")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm5/nicky-lenaers-ngx-scroll-to.js");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-gallery/core */ "./node_modules/@ngx-gallery/core/fesm5/ngx-gallery-core.js");
/* harmony import */ var _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-gallery/lightbox */ "./node_modules/@ngx-gallery/lightbox/fesm5/ngx-gallery-lightbox.js");
/* harmony import */ var ng2_img_max__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-img-max */ "./node_modules/ng2-img-max/dist/ng2-img-max.js");
/* harmony import */ var angular_stl_model_viewer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-stl-model-viewer */ "./node_modules/angular-stl-model-viewer/fesm5/angular-stl-model-viewer.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/upload */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd-upload.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/locales/en */ "./node_modules/@angular/common/locales/en.js");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _demo_demo_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./demo/demo.component */ "./src/app/demo/demo.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _clients_clients_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./clients/clients.component */ "./src/app/clients/clients.component.ts");
/* harmony import */ var _eyeglass_eyeglass_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./eyeglass/eyeglass.component */ "./src/app/eyeglass/eyeglass.component.ts");
/* harmony import */ var _type_type_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./type/type.component */ "./src/app/type/type.component.ts");
/* harmony import */ var _image_image_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./image/image.component */ "./src/app/image/image.component.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/session.service */ "./src/app/services/session.service.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./contacts/contacts.component */ "./src/app/contacts/contacts.component.ts");
/* harmony import */ var _services_jwt_interceptor__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/jwt.interceptor */ "./src/app/services/jwt.interceptor.ts");
/* harmony import */ var _services_error_interceptor__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/error.interceptor */ "./src/app/services/error.interceptor.ts");

















Object(_angular_common__WEBPACK_IMPORTED_MODULE_14__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_15___default.a);
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"],
                _demo_demo_component__WEBPACK_IMPORTED_MODULE_19__["DemoComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"],
                _clients_clients_component__WEBPACK_IMPORTED_MODULE_21__["ClientsComponent"],
                _type_type_component__WEBPACK_IMPORTED_MODULE_23__["TypeComponent"],
                _eyeglass_eyeglass_component__WEBPACK_IMPORTED_MODULE_22__["EyeglassComponent"],
                _image_image_component__WEBPACK_IMPORTED_MODULE_24__["ImageComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_27__["NavbarComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_28__["ProfileComponent"],
                _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_29__["ContactsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_7__["ScrollToModule"].forRoot(),
                _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_9__["LightboxModule"],
                _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_8__["GalleryModule"],
                ng2_img_max__WEBPACK_IMPORTED_MODULE_10__["Ng2ImgMaxModule"],
                angular_stl_model_viewer__WEBPACK_IMPORTED_MODULE_11__["StlModelViewerModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_12__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_13__["NzUploadModule"]
            ],
            providers: [
                _services_api_service__WEBPACK_IMPORTED_MODULE_25__["APIService"],
                _services_session_service__WEBPACK_IMPORTED_MODULE_26__["SessionService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _services_jwt_interceptor__WEBPACK_IMPORTED_MODULE_30__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _services_error_interceptor__WEBPACK_IMPORTED_MODULE_31__["ErrorInterceptor"], multi: true },
                { provide: _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_9__["LIGHTBOX_CONFIG"], useValue: { keyboardShortcuts: false } },
                { provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_12__["NZ_I18N"], useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_12__["en_US"] },
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_14__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_14__["HashLocationStrategy"] },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"]] // bootstrap array
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/clients/client.model.ts":
/*!*****************************************!*\
  !*** ./src/app/clients/client.model.ts ***!
  \*****************************************/
/*! exports provided: ClientModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientModel", function() { return ClientModel; });
var ClientModel = /** @class */ (function () {
    // public eyeglasses: Array<EyeglassModel>;
    // public contacts: Array<UserModel>;
    function ClientModel(client) {
        if (client) {
            this.id = client._id;
            this.companyName = client.companyName;
            this.contractType = client.contractType;
            this.memberSince = new Date(client.memberSince);
            this.location = client.location;
            this.eyeglasses = client.eyeglasses;
            this.contacts = client.contacts;
            this.billings = client.billings;
        }
    }
    ClientModel.ctorParameters = function () { return [
        null
    ]; };
    return ClientModel;
}());



/***/ }),

/***/ "./src/app/clients/clients.component.styl":
/*!************************************************!*\
  !*** ./src/app/clients/clients.component.styl ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host() {\n  text-transform: capitalize;\n}\n.um-section {\n  justify-content: center;\n  align-items: center;\n}\n.container {\n  padding-top: 4rem;\n}\n.errors {\n  color: #f00;\n}\n.clientValidateForm {\n  max-width: 600px;\n}\n/*# sourceMappingURL=src/app/clients/clients.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50cy9zcmMvYXBwL2NsaWVudHMvY2xpZW50cy5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvY2xpZW50cy9jbGllbnRzLmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQWU7QUNDakI7QURDQTtFQUNFLHVCQUFnQjtFQUNoQixtQkFBWTtBQ0NkO0FEQ0E7RUFDRSxpQkFBWTtBQ0NkO0FEQ0E7RUFDRSxXQUFNO0FDQ1I7QURDQTtFQUNFLGdCQUFVO0FDQ1o7QUFDQSxnRUFBZ0UiLCJmaWxlIjoic3JjL2FwcC9jbGllbnRzL2NsaWVudHMuY29tcG9uZW50LnN0eWwiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCgpXG4gIHRleHQtdHJhbnNmb3JtIGNhcGl0YWxpemVcblxuLnVtLXNlY3Rpb25cbiAganVzdGlmeS1jb250ZW50IGNlbnRlclxuICBhbGlnbi1pdGVtcyBjZW50ZXJcblxuLmNvbnRhaW5lclxuICBwYWRkaW5nLXRvcCA0cmVtXG5cbi5lcnJvcnNcbiAgY29sb3I6cmVkXG5cbi5jbGllbnRWYWxpZGF0ZUZvcm1cbiAgbWF4LXdpZHRoIDYwMHB4XG5cbiAgLy8gbnotZGF0ZS1waWNrZXIgOjpuZy1kZWVwIC5hbnQtY2FsZW5kYXItcGlja2VyIFxuICAvLyAgIHdpZHRoIDEwMCVcbiAgXG4gIC8vIG56LWRhdGUtcGlja2VyLFxuICAvLyBuei10aW1lLXBpY2tlciBcbiAgLy8gICB3aWR0aCAxMDAlXG4gICAgIiwiOmhvc3QoKSB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLnVtLXNlY3Rpb24ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogNHJlbTtcbn1cbi5lcnJvcnMge1xuICBjb2xvcjogI2YwMDtcbn1cbi5jbGllbnRWYWxpZGF0ZUZvcm0ge1xuICBtYXgtd2lkdGg6IDYwMHB4O1xufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3JjL2FwcC9jbGllbnRzL2NsaWVudHMuY29tcG9uZW50LmNzcy5tYXAgKi8iXX0= */"

/***/ }),

/***/ "./src/app/clients/clients.component.ts":
/*!**********************************************!*\
  !*** ./src/app/clients/clients.component.ts ***!
  \**********************************************/
/*! exports provided: ClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsComponent", function() { return ClientsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _client_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client.model */ "./src/app/clients/client.model.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_user_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user/user.model */ "./src/app/user/user.model.ts");







var ClientsComponent = /** @class */ (function () {
    function ClientsComponent(apiService, modalService, fb) {
        var _this = this;
        this.apiService = apiService;
        this.modalService = modalService;
        this.fb = fb;
        this.isClientEdited = false;
        this.isAlertOpen = false;
        this.confirmValidator = function (control) {
            if (!control.value) {
                return { required: true };
            }
            else if (control.value !== _this.validateForm.controls.email.value) {
                return { confirm: true, error: true };
            }
            return {};
        };
        this.validateForm = this.fb.group({
            companyName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            contractType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            location: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            emailConfirmation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email, this.confirmValidator]],
            contactName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            contactLastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            phoneNumberPrefix: ['+1'],
        });
    }
    ClientsComponent.prototype.ngOnInit = function () {
        this.getAllClients();
        this.user = new _user_user_model__WEBPACK_IMPORTED_MODULE_6__["UserModel"]();
    };
    ClientsComponent.prototype.getAllClients = function () {
        this.allClients = this.apiService.getClients();
    };
    ClientsComponent.prototype.onFormSubmit = function () {
        if (this.isClientEdited) {
            this.onClientEdit();
        }
        else {
            this.onAddClient();
        }
    };
    ClientsComponent.prototype.onAddClient = function () {
        var _this = this;
        this.client.memberSince = new Date();
        this.client.eyeglasses = [];
        this.client.contacts = [];
        this.apiService.addClient(this.client)
            .subscribe(function (client) {
            _this.user.client = client._id;
            _this.user.location = client.location;
            _this.apiService.addUser(_this.user).subscribe(function () {
                _this.showAlert('Client added successfully');
                _this.getAllClients();
            }, function (error) { return console.error(error); });
        }, function (err) {
            console.error(err);
        });
        this.modalService.dismissAll();
    };
    ClientsComponent.prototype.onAddClientModalOpen = function (modal) {
        this.isClientEdited = false;
        this.client = new _client_model__WEBPACK_IMPORTED_MODULE_3__["ClientModel"]();
        this.modalService.open(modal, { centered: true });
    };
    ClientsComponent.prototype.onModalClientEditOpen = function (client, clientModal) {
        this.isClientEdited = true;
        this.client = client;
        this.modalService.open(clientModal, { centered: true });
    };
    ClientsComponent.prototype.onClientEdit = function () {
        var _this = this;
        this.apiService.updateClient(this.client.id, this.client).subscribe(function () {
            _this.modalService.dismissAll();
            _this.isClientEdited = false;
            _this.showAlert('Client edited successfully');
        });
    };
    ClientsComponent.prototype.onModalClientDeleteOpen = function (client, modal) {
        this.client = client;
        this.modalService.open(modal, { size: 'sm', centered: true });
    };
    ClientsComponent.prototype.onClientDelete = function (modal) {
        var _this = this;
        this.apiService.deleteClient(this.client.id).subscribe(function () {
            _this.allClients.splice(_this.allClients.indexOf(_this.client), 1);
            _this.showAlert('Client deleted successfully');
        });
        this.modalService.dismissAll();
    };
    ClientsComponent.prototype.showAlert = function (message) {
        var _this = this;
        this.successMessage = message;
        this.isAlertOpen = true;
        setTimeout(function () {
            _this.isAlertOpen = false;
        }, 5000);
    };
    ClientsComponent.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
    ]; };
    ClientsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-clients',
            template: __webpack_require__(/*! raw-loader!./clients.component.html */ "./node_modules/raw-loader/index.js!./src/app/clients/clients.component.html"),
            styles: [__webpack_require__(/*! ./clients.component.styl */ "./src/app/clients/clients.component.styl")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], ClientsComponent);
    return ClientsComponent;
}());



/***/ }),

/***/ "./src/app/contacts/billing.model.ts":
/*!*******************************************!*\
  !*** ./src/app/contacts/billing.model.ts ***!
  \*******************************************/
/*! exports provided: BillingModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingModel", function() { return BillingModel; });
var BillingModel = /** @class */ (function () {
    function BillingModel(billing) {
        if (billing) {
            this.id = billing._id;
            this.client = billing.client;
            this.billingType = billing.billingType;
            this.firstNameRec = billing.firstNameRec;
            this.lastNameRec = billing.lastNameRec;
            this.emailRec = billing.emailRec;
            this.phoneRec = billing.phoneRec;
            this.firstNamePay = billing.firstNamePay;
            this.lastNamePay = billing.lastNamePay;
            this.emailPay = billing.emailPay;
            this.phonePay = billing.phonePay;
        }
    }
    BillingModel.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return BillingModel;
}());



/***/ }),

/***/ "./src/app/contacts/contacts.component.styl":
/*!**************************************************!*\
  !*** ./src/app/contacts/contacts.component.styl ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".um-section {\n  justify-content: center;\n  align-items: center;\n}\n.modal-header {\n  padding-top: 3rem;\n}\n.um-contact {\n  padding: 1rem;\n  border-radius: 5px;\n  border: solid 2px #202d43;\n  max-width: 30%;\n  position: relative;\n  margin-right: 0.5rem;\n}\n.um-contact__actions {\n  position: absolute;\n  border: 1px solid #000;\n  border-bottom: none;\n  right: 1rem;\n  top: 1rem;\n  display: none;\n  list-style: none;\n  padding: 0;\n}\n.um-contact__actions li {\n  padding: 0.5rem 1rem;\n  text-align: center;\n  border-bottom: 1px solid #000;\n}\n.um-contact__actions li:hover {\n  cursor: pointer;\n  color: #fff;\n  background: #da4f35;\n}\n.um-contact__btn-options {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.um-contact__btn-options .fa {\n  color: #da4f35;\n}\n.um-contact__btn-options:hover .um-contact__actions {\n  display: block;\n}\n.um-btn {\n  margin-bottom: 1rem;\n}\n.um-billing {\n  padding: 1rem;\n  border-radius: 5px;\n  border: solid 2px #202d43;\n  max-width: 30%;\n  position: relative;\n  margin-right: 0.5rem;\n}\n.um-billing__actions {\n  position: absolute;\n  border: 1px solid #000;\n  border-bottom: none;\n  right: 1rem;\n  top: 1rem;\n  display: none;\n  list-style: none;\n  padding: 0;\n}\n.um-billing__actions li {\n  padding: 0.5rem 1rem;\n  text-align: center;\n  border-bottom: 1px solid #000;\n}\n.um-billing__actions li:hover {\n  cursor: pointer;\n  color: #fff;\n  background: #da4f35;\n}\n.um-billing__btn-options {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.um-billing__btn-options .fa {\n  color: #da4f35;\n}\n.um-billing__btn-options:hover .um-billing__actions {\n  display: block;\n}\n.contact-card {\n  margin-left: 10px;\n}\n.billing-card {\n  margin-left: 10px;\n}\n/*# sourceMappingURL=src/app/contacts/contacts.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHMvc3JjL2FwcC9jb250YWN0cy9jb250YWN0cy5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvY29udGFjdHMvY29udGFjdHMuY29tcG9uZW50LnN0eWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSx1QkFBZ0I7RUFDaEIsbUJBQVk7QUNKZDtBRE1BO0VBQ0UsaUJBQVk7QUNKZDtBRE9BO0VBQ0UsYUFBUTtFQUNSLGtCQUFjO0VBQ2QseUJBQU87RUFDUCxjQUFVO0VBQ1Ysa0JBQVM7RUFDVCxvQkFBYTtBQ0xmO0FET0U7RUFDRSxrQkFBUztFQUNULHNCQUFPO0VBQ1AsbUJBQWM7RUFDZCxXQUFNO0VBQ04sU0FBSTtFQUNKLGFBQVE7RUFDUixnQkFBWTtFQUNaLFVBQVE7QUNMWjtBRE1JO0VBQ0Usb0JBQVE7RUFDUixrQkFBVztFQUNYLDZCQUFjO0FDSnBCO0FES007RUFDRSxlQUFPO0VBQ1AsV0FBTTtFQUNOLG1CQUFXO0FDSG5CO0FES0U7RUFDRSxrQkFBUztFQUNULFFBQU07RUFDTixNQUFJO0FDSFI7QURJSTtFQUNFLGNBQU07QUNGWjtBRElNO0VBQ0UsY0FBUTtBQ0ZoQjtBRElBO0VBQ0UsbUJBQWM7QUNGaEI7QURLQTtFQUNFLGFBQVE7RUFDUixrQkFBYztFQUNkLHlCQUFPO0VBQ1AsY0FBVTtFQUNWLGtCQUFTO0VBQ1Qsb0JBQWE7QUNIZjtBREtFO0VBQ0Usa0JBQVM7RUFDVCxzQkFBTztFQUNQLG1CQUFjO0VBQ2QsV0FBTTtFQUNOLFNBQUk7RUFDSixhQUFRO0VBQ1IsZ0JBQVk7RUFDWixVQUFRO0FDSFo7QURJSTtFQUNFLG9CQUFRO0VBQ1Isa0JBQVc7RUFDWCw2QkFBYztBQ0ZwQjtBREdNO0VBQ0UsZUFBTztFQUNQLFdBQU07RUFDTixtQkFBVztBQ0RuQjtBREdFO0VBQ0Usa0JBQVM7RUFDVCxRQUFNO0VBQ04sTUFBSTtBQ0RSO0FERUk7RUFDRSxjQUFNO0FDQVo7QURFTTtFQUNFLGNBQVE7QUNBaEI7QURJQTtFQUNFLGlCQUFZO0FDRmQ7QURJQTtFQUNFLGlCQUFZO0FDRmQ7QUFDQSxrRUFBa0UiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0cy9jb250YWN0cy5jb21wb25lbnQuc3R5bCIsInNvdXJjZXNDb250ZW50IjpbIiRuYWlrLWJsdWUgPSAjMjAyZDQzXG4kbmFpay15ZWxsb3cgPSAjZjNiZDNjXG4kbmFpay1vcmFuZ2UgPSAjZGE0ZjM1XG5cblxuLnVtLXNlY3Rpb25cbiAganVzdGlmeS1jb250ZW50IGNlbnRlclxuICBhbGlnbi1pdGVtcyBjZW50ZXJcblxuLm1vZGFsLWhlYWRlclxuICBwYWRkaW5nLXRvcCAzcmVtXG5cblxuLnVtLWNvbnRhY3RcbiAgcGFkZGluZyAxcmVtXG4gIGJvcmRlci1yYWRpdXMgNXB4XG4gIGJvcmRlciBzb2xpZCAycHggJG5haWstYmx1ZVxuICBtYXgtd2lkdGggMzAlXG4gIHBvc2l0aW9uIHJlbGF0aXZlXG4gIG1hcmdpbi1yaWdodCAuNXJlbVxuXG4gICZfX2FjdGlvbnNcbiAgICBwb3NpdGlvbiBhYnNvbHV0ZVxuICAgIGJvcmRlciAxcHggc29saWQgYmxhY2tcbiAgICBib3JkZXItYm90dG9tIG5vbmVcbiAgICByaWdodCAxcmVtXG4gICAgdG9wIDFyZW1cbiAgICBkaXNwbGF5IG5vbmVcbiAgICBsaXN0LXN0eWxlOiBub25lXG4gICAgcGFkZGluZyAwXG4gICAgbGlcbiAgICAgIHBhZGRpbmcgLjVyZW0gMXJlbVxuICAgICAgdGV4dC1hbGlnbiBjZW50ZXJcbiAgICAgIGJvcmRlci1ib3R0b20gMXB4IHNvbGlkIGJsYWNrXG4gICAgICAmOmhvdmVyXG4gICAgICAgIGN1cnNvciBwb2ludGVyXG4gICAgICAgIGNvbG9yIHdoaXRlXG4gICAgICAgIGJhY2tncm91bmQgJG5haWstb3JhbmdlXG5cbiAgJl9fYnRuLW9wdGlvbnNcbiAgICBwb3NpdGlvbiBhYnNvbHV0ZVxuICAgIHJpZ2h0IDBcbiAgICB0b3AgMFxuICAgIC5mYVxuICAgICAgY29sb3IgJG5haWstb3JhbmdlXG4gICAgJjpob3ZlclxuICAgICAgLnVtLWNvbnRhY3RfX2FjdGlvbnNcbiAgICAgICAgZGlzcGxheSBibG9ja1xuXG4udW0tYnRuXG4gIG1hcmdpbi1ib3R0b20gMXJlbVxuXG5cbi51bS1iaWxsaW5nXG4gIHBhZGRpbmcgMXJlbVxuICBib3JkZXItcmFkaXVzIDVweFxuICBib3JkZXIgc29saWQgMnB4ICRuYWlrLWJsdWVcbiAgbWF4LXdpZHRoIDMwJVxuICBwb3NpdGlvbiByZWxhdGl2ZVxuICBtYXJnaW4tcmlnaHQgLjVyZW1cblxuICAmX19hY3Rpb25zXG4gICAgcG9zaXRpb24gYWJzb2x1dGVcbiAgICBib3JkZXIgMXB4IHNvbGlkIGJsYWNrXG4gICAgYm9yZGVyLWJvdHRvbSBub25lXG4gICAgcmlnaHQgMXJlbVxuICAgIHRvcCAxcmVtXG4gICAgZGlzcGxheSBub25lXG4gICAgbGlzdC1zdHlsZTogbm9uZVxuICAgIHBhZGRpbmcgMFxuICAgIGxpXG4gICAgICBwYWRkaW5nIC41cmVtIDFyZW1cbiAgICAgIHRleHQtYWxpZ24gY2VudGVyXG4gICAgICBib3JkZXItYm90dG9tIDFweCBzb2xpZCBibGFja1xuICAgICAgJjpob3ZlclxuICAgICAgICBjdXJzb3IgcG9pbnRlclxuICAgICAgICBjb2xvciB3aGl0ZVxuICAgICAgICBiYWNrZ3JvdW5kICRuYWlrLW9yYW5nZVxuXG4gICZfX2J0bi1vcHRpb25zXG4gICAgcG9zaXRpb24gYWJzb2x1dGVcbiAgICByaWdodCAwXG4gICAgdG9wIDBcbiAgICAuZmFcbiAgICAgIGNvbG9yICRuYWlrLW9yYW5nZVxuICAgICY6aG92ZXJcbiAgICAgIC51bS1iaWxsaW5nX19hY3Rpb25zXG4gICAgICAgIGRpc3BsYXkgYmxvY2tcblxuXG5cbi5jb250YWN0LWNhcmRcbiAgbWFyZ2luLWxlZnQgMTBweFxuXG4uYmlsbGluZy1jYXJkXG4gIG1hcmdpbi1sZWZ0IDEwcHgiLCIudW0tc2VjdGlvbiB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1vZGFsLWhlYWRlciB7XG4gIHBhZGRpbmctdG9wOiAzcmVtO1xufVxuLnVtLWNvbnRhY3Qge1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogc29saWQgMnB4ICMyMDJkNDM7XG4gIG1heC13aWR0aDogMzAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xufVxuLnVtLWNvbnRhY3RfX2FjdGlvbnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIHJpZ2h0OiAxcmVtO1xuICB0b3A6IDFyZW07XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG4udW0tY29udGFjdF9fYWN0aW9ucyBsaSB7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xufVxuLnVtLWNvbnRhY3RfX2FjdGlvbnMgbGk6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjZGE0ZjM1O1xufVxuLnVtLWNvbnRhY3RfX2J0bi1vcHRpb25zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xufVxuLnVtLWNvbnRhY3RfX2J0bi1vcHRpb25zIC5mYSB7XG4gIGNvbG9yOiAjZGE0ZjM1O1xufVxuLnVtLWNvbnRhY3RfX2J0bi1vcHRpb25zOmhvdmVyIC51bS1jb250YWN0X19hY3Rpb25zIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4udW0tYnRuIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi51bS1iaWxsaW5nIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IHNvbGlkIDJweCAjMjAyZDQzO1xuICBtYXgtd2lkdGg6IDMwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbn1cbi51bS1iaWxsaW5nX19hY3Rpb25zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICByaWdodDogMXJlbTtcbiAgdG9wOiAxcmVtO1xuICBkaXNwbGF5OiBub25lO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xufVxuLnVtLWJpbGxpbmdfX2FjdGlvbnMgbGkge1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcbn1cbi51bS1iaWxsaW5nX19hY3Rpb25zIGxpOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogI2RhNGYzNTtcbn1cbi51bS1iaWxsaW5nX19idG4tb3B0aW9ucyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbn1cbi51bS1iaWxsaW5nX19idG4tb3B0aW9ucyAuZmEge1xuICBjb2xvcjogI2RhNGYzNTtcbn1cbi51bS1iaWxsaW5nX19idG4tb3B0aW9uczpob3ZlciAudW0tYmlsbGluZ19fYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmNvbnRhY3QtY2FyZCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLmJpbGxpbmctY2FyZCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3JjL2FwcC9jb250YWN0cy9jb250YWN0cy5jb21wb25lbnQuY3NzLm1hcCAqLyJdfQ== */"

/***/ }),

/***/ "./src/app/contacts/contacts.component.ts":
/*!************************************************!*\
  !*** ./src/app/contacts/contacts.component.ts ***!
  \************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user/user.model */ "./src/app/user/user.model.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _billing_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./billing.model */ "./src/app/contacts/billing.model.ts");








var ContactsComponent = /** @class */ (function () {
    function ContactsComponent(apiService, modalService, route, fb, billingFb) {
        var _this = this;
        this.apiService = apiService;
        this.modalService = modalService;
        this.route = route;
        this.fb = fb;
        this.billingFb = billingFb;
        this.confirmValidator = function (control) {
            if (!control.value) {
                return { required: true };
            }
            else if (control.value !== _this.validateForm.controls.email.value) {
                return { confirm: true, error: true };
            }
            return {};
        };
        this.billingPayConfirmValidator = function (control) {
            if (!control.value) {
                return { required: true };
            }
            else if (control.value !== _this.billingValidateForm.controls.emailPay.value) {
                return { confirm: true, error: true };
            }
            return {};
        };
        this.billingRecConfirmValidator = function (control) {
            if (!control.value) {
                return { required: true };
            }
            else if (control.value !== _this.billingValidateForm.controls.emailRec.value) {
                return { confirm: true, error: true };
            }
            return {};
        };
        this.validateForm = this.fb.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            emailConfirmation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email, this.confirmValidator]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            phoneNumberPrefix: ['+1'],
            location: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
        });
        this.billingValidateForm = this.billingFb.group({
            billingType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            firstNameRec: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            lastNameRec: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            emailRec: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            emailConfirmationRec: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email, this.billingRecConfirmValidator]],
            phoneRec: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            phoneNumberPrefixRec: ['+1'],
            firstNamePay: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            lastNamePay: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            emailPay: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            emailConfirmationPay: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email, this.billingPayConfirmValidator]],
            phonePay: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            phoneNumberPrefixPay: ['+1'],
        });
    }
    ContactsComponent.prototype.ngOnInit = function () {
        this.clientId = this.route.snapshot.params.client_id;
        this.getContacts();
        this.getBillings();
    };
    ContactsComponent.prototype.getContacts = function () {
        this.contactList = this.apiService.getContacts(this.clientId);
    };
    ContactsComponent.prototype.getBillings = function () {
        this.billingList = this.apiService.getBillings(this.clientId);
    };
    ContactsComponent.prototype.onEditContactModalOpen = function (modal, contact) {
        this.contact = contact;
        this.isContactEdited = true;
        this.modalService.open(modal, { centered: true });
    };
    ContactsComponent.prototype.onEditBillingModalOpen = function (model, billing) {
        this.billing = billing;
        this.isBillingEdited = true;
        this.modalService.open(model, { centered: true });
    };
    ContactsComponent.prototype.onDeleteContactModalOpen = function (modal, contact) {
        this.contact = contact;
        this.modalService.open(modal, { centered: true });
    };
    ContactsComponent.prototype.onDeleteBillingModalOpen = function (model, billing) {
        this.billing = billing;
        this.modalService.open(model, { centered: true });
    };
    ContactsComponent.prototype.onAddContactModalOpen = function (modal) {
        this.isContactEdited = false;
        this.contact = new _user_user_model__WEBPACK_IMPORTED_MODULE_2__["UserModel"]();
        this.modalService.open(modal, { centered: true });
    };
    ContactsComponent.prototype.onAddBillingModalOpen = function (modal) {
        this.isBillingEdited = false;
        this.billing = new _billing_model__WEBPACK_IMPORTED_MODULE_7__["BillingModel"]();
        this.modalService.open(modal, { centered: true });
    };
    ContactsComponent.prototype.onFormSubmit = function () {
        if (this.isContactEdited) {
            this.editContact();
        }
        else {
            this.addContact();
        }
    };
    ContactsComponent.prototype.onBillingFormSubmit = function () {
        if (this.isBillingEdited) {
            this.editBilling();
        }
        else {
            this.addBilling();
        }
    };
    ContactsComponent.prototype.editContact = function () {
        var _this = this;
        this.apiService.updateContact(this.contact).subscribe(function () {
            _this.modalService.dismissAll();
            _this.getContacts();
            _this.showAlert('Contact updated successfully!');
        }, function (error) {
            console.error(error);
            _this.showAlert(error);
        });
    };
    ContactsComponent.prototype.editBilling = function () {
        var _this = this;
        this.apiService.updateBilling(this.billing).subscribe(function () {
            _this.modalService.dismissAll();
            _this.getBillings();
            _this.showAlert('Billing information updated successfully!');
        }, function (error) {
            _this.showAlert(error);
        });
    };
    ContactsComponent.prototype.deleteContact = function () {
        var _this = this;
        this.modalService.dismissAll();
        this.apiService.deleteContact(this.contact.id)
            .subscribe(function () {
            _this.getContacts();
            _this.showAlert(_this.contact.firstName + ' ' + _this.contact.lastName + ' contact deleted.');
        }, function (error) {
            _this.showAlert(error);
        });
    };
    ContactsComponent.prototype.deleteBilling = function () {
        var _this = this;
        this.modalService.dismissAll();
        this.apiService.deleteBilling(this.billing)
            .subscribe(function () {
            _this.getBillings();
            _this.showAlert('Billing information deleted, please add again.');
        }, function (error) {
            _this.showAlert(error);
        });
    };
    ContactsComponent.prototype.addContact = function () {
        var _this = this;
        this.contact.client = this.clientId;
        this.apiService.addContact(this.contact)
            .subscribe(function (data) {
            _this.modalService.dismissAll();
            _this.showAlert('Contact added successfully');
            _this.getContacts();
        }, function (error) {
            console.error(error);
        });
    };
    ContactsComponent.prototype.addBilling = function () {
        var _this = this;
        this.billing.client = this.clientId;
        this.apiService.addBilling(this.billing)
            .subscribe(function (data) {
            _this.modalService.dismissAll();
            _this.showAlert('Contact added successfully');
            _this.getBillings();
        }, function (error) {
            console.error(error);
        });
    };
    ContactsComponent.prototype.showAlert = function (message) {
        var _this = this;
        this.alertMessage = message;
        this.isAlertOpen = true;
        setTimeout(function () {
            _this.isAlertOpen = false;
        }, 5000);
    };
    ContactsComponent.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["APIService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }
    ]; };
    ContactsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contacts',
            template: __webpack_require__(/*! raw-loader!./contacts.component.html */ "./node_modules/raw-loader/index.js!./src/app/contacts/contacts.component.html"),
            styles: [__webpack_require__(/*! ./contacts.component.styl */ "./src/app/contacts/contacts.component.styl")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_4__["APIService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "./src/app/demo/demo.component.styl":
/*!******************************************!*\
  !*** ./src/app/demo/demo.component.styl ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .app-section {\n  flex-direction: column;\n}\n.um-section {\n  flex-direction: column;\n}\n.container {\n  margin-top: 5rem;\n  display: flex;\n  flex: 1;\n}\n.d-flex {\n  height: 100%;\n}\n.um-section--buttons {\n  display: flex;\n  width: 100%;\n  justify-content: space-evenly;\n}\n.um-section--buttons .btn {\n  min-width: 10rem;\n  padding: 10px 0;\n}\n.um-title {\n  font-size: 4em;\n  font-weight: 100;\n  letter-spacing: 5px;\n}\n.um-subtitle {\n  font-size: 3em;\n  font-weight: normal;\n  letter-spacing: 2px;\n}\n/*# sourceMappingURL=src/app/demo/demo.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9zcmMvYXBwL2RlbW8vZGVtby5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvZGVtby9kZW1vLmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQWU7QUNDakI7QURDQTtFQUNFLHNCQUFlO0FDQ2pCO0FEQ0E7RUFDRSxnQkFBVztFQUNYLGFBQVE7RUFDUixPQUFLO0FDQ1A7QURDQTtFQUNFLFlBQU87QUNDVDtBRENBO0VBQ0UsYUFBUTtFQUNSLFdBQU07RUFDTiw2QkFBZ0I7QUNDbEI7QURBRTtFQUNFLGdCQUFVO0VBQ1YsZUFBUTtBQ0VaO0FEQUE7RUFDRSxjQUFVO0VBQ1YsZ0JBQVk7RUFDWixtQkFBZTtBQ0VqQjtBREFBO0VBQ0UsY0FBVTtFQUNWLG1CQUFZO0VBQ1osbUJBQWU7QUNFakI7QUFDQSwwREFBMEQiLCJmaWxlIjoic3JjL2FwcC9kZW1vL2RlbW8uY29tcG9uZW50LnN0eWwiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLmFwcC1zZWN0aW9uXG4gIGZsZXgtZGlyZWN0aW9uIGNvbHVtblxuXG4udW0tc2VjdGlvblxuICBmbGV4LWRpcmVjdGlvbiBjb2x1bW5cblxuLmNvbnRhaW5lclxuICBtYXJnaW4tdG9wIDVyZW1cbiAgZGlzcGxheSBmbGV4XG4gIGZsZXggMVxuXG4uZC1mbGV4XG4gIGhlaWdodCAxMDAlXG5cbi51bS1zZWN0aW9uLS1idXR0b25zXG4gIGRpc3BsYXkgZmxleFxuICB3aWR0aCAxMDAlXG4gIGp1c3RpZnktY29udGVudCBzcGFjZS1ldmVubHlcbiAgLmJ0blxuICAgIG1pbi13aWR0aCAxMHJlbVxuICAgIHBhZGRpbmcgMTBweCAwXG5cbi51bS10aXRsZVxuICBmb250LXNpemUgNGVtXG4gIGZvbnQtd2VpZ2h0IDEwMFxuICBsZXR0ZXItc3BhY2luZyA1cHhcblxuLnVtLXN1YnRpdGxlXG4gIGZvbnQtc2l6ZSAzZW1cbiAgZm9udC13ZWlnaHQgbm9ybWFsXG4gIGxldHRlci1zcGFjaW5nIDJweFxuIiwiOjpuZy1kZWVwIC5hcHAtc2VjdGlvbiB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4udW0tc2VjdGlvbiB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbn1cbi5kLWZsZXgge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4udW0tc2VjdGlvbi0tYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cbi51bS1zZWN0aW9uLS1idXR0b25zIC5idG4ge1xuICBtaW4td2lkdGg6IDEwcmVtO1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG4udW0tdGl0bGUge1xuICBmb250LXNpemU6IDRlbTtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbn1cbi51bS1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogM2VtO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3JjL2FwcC9kZW1vL2RlbW8uY29tcG9uZW50LmNzcy5tYXAgKi8iXX0= */"

/***/ }),

/***/ "./src/app/demo/demo.component.ts":
/*!****************************************!*\
  !*** ./src/app/demo/demo.component.ts ***!
  \****************************************/
/*! exports provided: DemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoComponent", function() { return DemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DemoComponent = /** @class */ (function () {
    function DemoComponent() {
    }
    DemoComponent.prototype.ngOnInit = function () {
    };
    DemoComponent.prototype.showPopup = function () {
        window.open('http://localhost:3000/app/your-company/5c81a91c4d02104a40a46ea7/', 'name', 'width=800,height=550,location=no,menubar=no');
    };
    DemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-demo',
            template: __webpack_require__(/*! raw-loader!./demo.component.html */ "./node_modules/raw-loader/index.js!./src/app/demo/demo.component.html"),
            styles: [__webpack_require__(/*! ./demo.component.styl */ "./src/app/demo/demo.component.styl")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DemoComponent);
    return DemoComponent;
}());



/***/ }),

/***/ "./src/app/eyeglass/eyeglass.component.styl":
/*!**************************************************!*\
  !*** ./src/app/eyeglass/eyeglass.component.styl ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host() {\n  text-transform: capitalize;\n}\n.um-section {\n  justify-content: center;\n  align-items: center;\n}\n.um-section {\n  padding-top: 8rem;\n}\n/*# sourceMappingURL=src/app/eyeglass/eyeglass.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXllZ2xhc3Mvc3JjL2FwcC9leWVnbGFzcy9leWVnbGFzcy5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvZXllZ2xhc3MvZXllZ2xhc3MuY29tcG9uZW50LnN0eWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBZTtBQ0NqQjtBRENBO0VBQ0UsdUJBQWdCO0VBQ2hCLG1CQUFZO0FDQ2Q7QURDQTtFQUNFLGlCQUFZO0FDQ2Q7QUFDQSxrRUFBa0UiLCJmaWxlIjoic3JjL2FwcC9leWVnbGFzcy9leWVnbGFzcy5jb21wb25lbnQuc3R5bCIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0KClcbiAgdGV4dC10cmFuc2Zvcm0gY2FwaXRhbGl6ZVxuXG4udW0tc2VjdGlvblxuICBqdXN0aWZ5LWNvbnRlbnQgY2VudGVyXG4gIGFsaWduLWl0ZW1zIGNlbnRlclxuXG4udW0tc2VjdGlvblxuICBwYWRkaW5nLXRvcCA4cmVtXG5cblxuXG4iLCI6aG9zdCgpIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4udW0tc2VjdGlvbiB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnVtLXNlY3Rpb24ge1xuICBwYWRkaW5nLXRvcDogOHJlbTtcbn1cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXNyYy9hcHAvZXllZ2xhc3MvZXllZ2xhc3MuY29tcG9uZW50LmNzcy5tYXAgKi8iXX0= */"

/***/ }),

/***/ "./src/app/eyeglass/eyeglass.component.ts":
/*!************************************************!*\
  !*** ./src/app/eyeglass/eyeglass.component.ts ***!
  \************************************************/
/*! exports provided: EyeglassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EyeglassComponent", function() { return EyeglassComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _eyeglass_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./eyeglass.model */ "./src/app/eyeglass/eyeglass.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var EyeglassComponent = /** @class */ (function () {
    function EyeglassComponent(apiService, modalService, route, fb) {
        this.apiService = apiService;
        this.modalService = modalService;
        this.route = route;
        this.fb = fb;
        this.disable = false;
        this.validateForm = this.fb.group({
            model: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            upc: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            brand: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            size: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            info: ['']
        });
    }
    EyeglassComponent.prototype.ngOnInit = function () {
        this.clientId = this.route.snapshot.params.client_id;
        this.companyName = this.route.snapshot.queryParams['companyName'];
        this.getEyeglassesList();
    };
    EyeglassComponent.prototype.getEyeglassesList = function () {
        this.eyeglasses = this.apiService.getEyeglasses(this.clientId);
    };
    EyeglassComponent.prototype.getEyeglass = function () {
        this.eyeglass = this.apiService.getEyeglass(this.eyeglassId);
    };
    EyeglassComponent.prototype.onEditEyeglassModalOpen = function (eyeglass, modal) {
        this.isEyeglassEdited = true;
        this.eyeglass = eyeglass;
        this.modalService.open(modal, { centered: true });
    };
    EyeglassComponent.prototype.onDeleteEyeglassModalOpen = function (eyeglass, modal) {
        this.eyeglass = eyeglass;
        this.modalService.open(modal, { centered: true });
    };
    EyeglassComponent.prototype.onAddEyeglassModalOpen = function (modal) {
        this.isEyeglassEdited = false;
        this.eyeglass = new _eyeglass_model__WEBPACK_IMPORTED_MODULE_4__["EyeglassModel"]();
        this.modalService.open(modal, { centered: true });
    };
    EyeglassComponent.prototype.AddEyeglass = function () {
        var _this = this;
        this.eyeglass.client = this.clientId;
        this.eyeglass.btnAct = true;
        this.apiService.addEyeglass(this.eyeglass).subscribe(function (eyeglass) {
            _this.getEyeglassesList();
            _this.modalService.dismissAll();
            _this.eyeglassId = eyeglass._id;
        }, function (error) {
            console.error(error);
        });
    };
    EyeglassComponent.prototype.EditEyeglass = function () {
        var _this = this;
        this.apiService.updateEyeglass(this.eyeglass.id, this.eyeglass).subscribe(function () {
            _this.showAlert(_this.eyeglass.model + ' was edited successfully');
            _this.modalService.dismissAll();
        }, function (error) {
            console.error(error);
            _this.showAlert(error);
        });
    };
    EyeglassComponent.prototype.DeleteEyeglass = function () {
        var _this = this;
        this.apiService.deleteEyeglass(this.eyeglass.id).subscribe(function (res) {
            _this.modalService.dismissAll();
            _this.showAlert('Eyeglass removed successfully');
            _this.eyeglasses.splice(_this.eyeglasses.indexOf(_this.eyeglass), 1);
        }, function (error) {
            console.error(error);
        });
    };
    EyeglassComponent.prototype.onFormSubmit = function (imageForm) {
        if (this.isEyeglassEdited) {
            this.EditEyeglass();
        }
        else {
            this.AddEyeglass();
        }
    };
    EyeglassComponent.prototype.showAlert = function (message) {
        var _this = this;
        this.alertMessage = message;
        this.isAlertOpen = true;
        setTimeout(function () {
            _this.isAlertOpen = false;
        }, 5000);
    };
    EyeglassComponent.prototype.disableBtn = function (eyeglass) {
        this.eyeglass = eyeglass;
        this.eyeglass.btnAct = !this.eyeglass.btnAct;
        this.EditEyeglass();
        this.modalService.dismissAll();
    };
    EyeglassComponent.prototype.onChange = function (input) {
        if (input) {
            if (input.length === 2) {
                this.eyeglass.size = input + '-';
            }
            else if (input.length === 3 && input.substr(2, 1) !== '-') {
                var lastCharacter = input.substr(2, 1);
                var firstCharacters = input.substr(0, 2);
                this.eyeglass.size = firstCharacters + '-' + lastCharacter;
            }
            else if (input.length === 5) {
                this.eyeglass.size = input + '-';
            }
            else if (input.length === 6 && input.substr(5, 1) !== '-') {
                var lastCharacter = input.substr(5, 1);
                var firstCharacters = input.substr(0, 5);
                this.eyeglass.size = firstCharacters + '-' + lastCharacter;
            }
        }
    };
    EyeglassComponent.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
    ]; };
    EyeglassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-eyeglass',
            template: __webpack_require__(/*! raw-loader!./eyeglass.component.html */ "./node_modules/raw-loader/index.js!./src/app/eyeglass/eyeglass.component.html"),
            styles: [__webpack_require__(/*! ./eyeglass.component.styl */ "./src/app/eyeglass/eyeglass.component.styl")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], EyeglassComponent);
    return EyeglassComponent;
}());



/***/ }),

/***/ "./src/app/eyeglass/eyeglass.model.ts":
/*!********************************************!*\
  !*** ./src/app/eyeglass/eyeglass.model.ts ***!
  \********************************************/
/*! exports provided: EyeglassModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EyeglassModel", function() { return EyeglassModel; });
var EyeglassModel = /** @class */ (function () {
    function EyeglassModel(eyeglass) {
        if (eyeglass) {
            this.id = eyeglass._id;
            this.model = eyeglass.model;
            this.upc = eyeglass.upc;
            this.brand = eyeglass.brand;
            this.size = eyeglass.size;
            this.info = eyeglass.info;
            this.client = eyeglass.client;
            this.types = eyeglass.types;
            this.btnAct = eyeglass.btnAct;
        }
    }
    EyeglassModel.ctorParameters = function () { return [
        null
    ]; };
    return EyeglassModel;
}());



/***/ }),

/***/ "./src/app/home/home.component.styl":
/*!******************************************!*\
  !*** ./src/app/home/home.component.styl ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".um-section--about {\n  background: #202d43;\n  color: #fff;\n}\n.um-section--about .um-img--circle {\n  height: 80vh;\n  width: 80vh;\n  border-radius: 0 50% 50% 0;\n}\n.um-section--about .um-img--about-us {\n  position: absolute;\n  right: 10vh;\n  top: 3vh;\n  background: url(\"/assets/images/about-us.jpg\");\n  background-size: cover;\n  background-position: 50% 50%;\n}\n.um-section--products {\n  background-image: linear-gradient(#fff, #cccacd);\n}\n.um-section--products__info {\n  min-height: 80vh;\n  margin: 3em 0 1em;\n}\n.um-section--products .um-img--glasses {\n  margin-top: -30px;\n  height: 85vh;\n  width: 100%;\n  background: url(\"/assets/images/product1.jpg\");\n  background-size: cover;\n  background-position: 50% 50%;\n}\n.um-section--demo {\n  background-image: linear-gradient(135deg, #27406c, #355691, #537ac0);\n}\n.um-section--demo .um-title {\n  color: #fafafa;\n}\n.um-section--demo .um-btn {\n  border: solid 1px #f3bd3c;\n  letter-spacing: 2px;\n  font-size: 2em;\n  color: #f3bd3c;\n  width: 30vh;\n  height: 10vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.um-section--demo .um-btn:hover {\n  background: #f3bd3c;\n  color: #fafafa;\n  text-decoration: none;\n}\n.um-section--contact {\n  background: url(\"/assets/images/contact.jpg\");\n  background-position: 50% 50%;\n  background-size: cover;\n  color: #fff;\n  padding: 0;\n}\n.um-section--contact .um-title {\n  text-align: center;\n}\n.um-section--footer {\n  background-color: #202d43;\n  color: #fff;\n  min-height: 50px;\n  font-size: 12px;\n  letter-spacing: 1px;\n  font-weight: 100;\n  padding: 2em 3em;\n  text-align: center;\n}\n.um-background--image-1 {\n  background: url(\"/assets/images/product2.jpg\");\n  background-size: cover;\n  background-position: 50% 50%;\n}\n.um-background--image-1.um-box-container {\n  color: #fff;\n  border: solid 2px #da4f35;\n}\n.um-background--image-1.um-box-container .um-title {\n  background: #da4f35;\n}\n.um-background--image-1.um-box-container .um-text {\n  background: rgba(0,0,0,0.4);\n}\n.um-background--image-2 {\n  background: url(\"/assets/images/product4.jpg\");\n  background-size: cover;\n  background-position: 50% 50%;\n}\n.um-background--image-2.um-box-container {\n  color: #fff;\n  border: solid 2px #202d43;\n}\n.um-background--image-2.um-box-container .um-title {\n  background: #202d43;\n}\n.um-background--image-2.um-box-container .um-text {\n  background: rgba(0,0,0,0.5);\n}\n.um-background--image-3 {\n  background: url(\"/assets/images/product3.jpg\");\n  background-size: cover;\n  background-position: 50% 50%;\n}\n.um-background--image-3.um-box-container {\n  color: #fff;\n  border: solid 2px #f3bd3c;\n}\n.um-background--image-3.um-box-container .um-title {\n  background: #f3bd3c;\n}\n.um-background--image-3.um-box-container .um-text {\n  background: rgba(0,0,0,0.6);\n}\n.um-background-layer {\n  width: 100%;\n  background: rgba(0,0,0,0.5);\n  padding: 3em 2em;\n}\n.um-box-container {\n  margin: 1em 0;\n}\n.um-box-container__title {\n  text-transform: uppercase;\n  padding: 0.5em 0;\n  color: #fff;\n  text-align: center;\n  font-size: 18px;\n}\n.um-box-container__text {\n  padding: 1em 0.5em;\n}\n.um-box-container__text ul {\n  min-height: 35vh;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n}\n.um-box-container__text li {\n  text-align: center;\n  padding: 0.5em;\n  font-size: 16px;\n  list-style: none;\n}\n.um-box-container__text li:not(:last-child) {\n  border-bottom: solid 1px #fafafa;\n}\n.um-title {\n  padding-bottom: 1em;\n}\n.um-text {\n  font-size: 1.2em;\n}\n.um-about {\n  color: #fff;\n  width: 100%;\n}\n.um-header-text {\n  letter-spacing: 2px;\n  font-weight: 100;\n}\n.um-navbar {\n  width: 100%;\n}\n.navbar {\n  padding: 1rem 3rem;\n  border-bottom: 4px solid #dcefe9;\n  background: #fafafa;\n}\n.navbar:hover .img-fluid {\n  width: 115px !important;\n}\n.navbar .img-fluid {\n  transition: width 250ms ease-in-out;\n}\n.navbar .nav-item {\n  letter-spacing: 1px;\n  margin: 0 1rem;\n}\n.navbar .nav-item .nav-link:hover {\n  text-decoration: underline;\n  cursor: pointer;\n}\n.form-control {\n  border-radius: 0;\n  color: #fff;\n}\n.form-control:not([type='submit']) {\n  background: rgba(0,0,0,0.2);\n}\n@media (max-width: 576px) {\n  .um-section--products__info {\n    margin: 0;\n  }\n  .um-section--products .um-img--glasses {\n    display: none;\n  }\n  .um-box-container {\n    margin: 1em -1em;\n  }\n}\n@media (max-width: 768px) {\n  .um-section--about .um-img--about-us {\n    position: relative;\n    right: 0;\n    top: 0;\n  }\n  .um-section--about .um-img--circle {\n    height: 30vh;\n    width: 30vh;\n    border-radius: 50% 50%;\n  }\n  .um-section--products .um-img--glasses {\n    margin: 0;\n  }\n}\n@media (max-width: 992px) {\n  .um-section--about .um-img--about-us {\n    right: 0;\n    top: 0;\n    background-position: 30% 50%;\n  }\n  .um-section--products__info {\n    margin: 0;\n  }\n  .um-section--products .um-img--glasses {\n    height: 75vh;\n  }\n}\n/*# sourceMappingURL=src/app/home/home.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtFO0VBQ0UsbUJBQVc7RUFDWCxXQUFNO0FDSlY7QURNTTtFQUNFLFlBQU87RUFDUCxXQUFNO0VBQ04sMEJBQWM7QUNKdEI7QURLTTtFQUNFLGtCQUFTO0VBQ1QsV0FBTTtFQUNOLFFBQUk7RUFDSiw4Q0FBNEM7RUFDNUMsc0JBQWdCO0VBQ2hCLDRCQUFvQjtBQ0g1QjtBREtFO0VBQ0UsZ0RBQStDO0FDSG5EO0FESUk7RUFDRSxnQkFBVztFQUNYLGlCQUFPO0FDRmI7QURHSTtFQUNFLGlCQUFXO0VBQ1gsWUFBTztFQUNQLFdBQU07RUFDTiw4Q0FBNEM7RUFDNUMsc0JBQWdCO0VBQ2hCLDRCQUFvQjtBQ0QxQjtBREdFO0VBQ0Usb0VBQTRGO0FDRGhHO0FERUk7RUFDRSxjQUFNO0FDQVo7QURDSTtFQUNFLHlCQUFPO0VBQ1AsbUJBQWU7RUFDZixjQUFVO0VBQ1YsY0FBTTtFQUNOLFdBQU07RUFDTixZQUFPO0VBQ1AsYUFBUTtFQUNSLHVCQUFnQjtFQUNoQixtQkFBWTtBQ0NsQjtBREFNO0VBQ0UsbUJBQVc7RUFDWCxjQUFNO0VBQ04scUJBQWdCO0FDRXhCO0FEQUU7RUFDRSw2Q0FBMkM7RUFDM0MsNEJBQW9CO0VBQ3BCLHNCQUFnQjtFQUNoQixXQUFNO0VBQ04sVUFBUTtBQ0VaO0FEREk7RUFDRSxrQkFBVztBQ0dqQjtBRERFO0VBQ00seUJBQWlCO0VBQ2pCLFdBQU07RUFDTixnQkFBVztFQUNYLGVBQVU7RUFDVixtQkFBZTtFQUNmLGdCQUFZO0VBQ1osZ0JBQVE7RUFDUixrQkFBVztBQ0duQjtBRENFO0VBQ0UsOENBQTRDO0VBQzVDLHNCQUFnQjtFQUNoQiw0QkFBb0I7QUNDeEI7QURBSTtFQUNFLFdBQU07RUFDTix5QkFBTztBQ0ViO0FERE07RUFDRSxtQkFBVztBQ0duQjtBREZNO0VBQ0UsMkJBQXlCO0FDSWpDO0FESEU7RUFDRSw4Q0FBNEM7RUFDNUMsc0JBQWdCO0VBQ2hCLDRCQUFvQjtBQ0t4QjtBREpJO0VBQ0UsV0FBTTtFQUNOLHlCQUFPO0FDTWI7QURMTTtFQUNFLG1CQUFXO0FDT25CO0FETk07RUFDRSwyQkFBeUI7QUNRakM7QURQRTtFQUNFLDhDQUE0QztFQUM1QyxzQkFBZ0I7RUFDaEIsNEJBQW9CO0FDU3hCO0FEUkk7RUFDRSxXQUFNO0VBQ04seUJBQU87QUNVYjtBRFRNO0VBQ0UsbUJBQVc7QUNXbkI7QURWTTtFQUNFLDJCQUF5QjtBQ1lqQztBRFRBO0VBQ0UsV0FBTTtFQUNOLDJCQUF5QjtFQUN6QixnQkFBUTtBQ1dWO0FEUkE7RUFDRSxhQUFPO0FDVVQ7QURURTtFQUNFLHlCQUFlO0VBQ2YsZ0JBQVE7RUFDUixXQUFNO0VBQ04sa0JBQVc7RUFDWCxlQUFVO0FDV2Q7QURWRTtFQUNFLGtCQUFRO0FDWVo7QURYSTtFQUNFLGdCQUFXO0VBQ1gsU0FBTztFQUNQLFVBQVE7RUFDUixhQUFRO0VBQ1Isc0JBQWU7RUFDZiw2QkFBZ0I7QUNhdEI7QURaSTtFQUNFLGtCQUFXO0VBQ1gsY0FBUTtFQUNSLGVBQVU7RUFDVixnQkFBVztBQ2NqQjtBRGJNO0VBQ0UsZ0NBQWM7QUNldEI7QURaQTtFQUNFLG1CQUFlO0FDY2pCO0FEWkE7RUFDRSxnQkFBVTtBQ2NaO0FEWkE7RUFDRSxXQUFNO0VBQ04sV0FBTTtBQ2NSO0FEWkE7RUFDRSxtQkFBZTtFQUNmLGdCQUFZO0FDY2Q7QURaQTtFQUNFLFdBQU07QUNjUjtBRFpBO0VBQ0Usa0JBQVE7RUFDUixnQ0FBYztFQUNkLG1CQUFXO0FDY2I7QURaSTtFQUNFLHVCQUFNO0FDY1o7QURiRTtFQUNFLG1DQUFXO0FDZWY7QURkRTtFQUNFLG1CQUFlO0VBQ2YsY0FBTztBQ2dCWDtBRGRNO0VBQ0UsMEJBQWdCO0VBQ2hCLGVBQU87QUNnQmY7QURiQTtFQUNFLGdCQUFjO0VBQ2QsV0FBTTtBQ2VSO0FEYkU7RUFDRSwyQkFBeUI7QUNlN0I7QURid0I7RUFHbEI7SUFDRSxTQUFPO0VDYWI7RURYTTtJQUNFLGFBQVE7RUNhaEI7RURaQTtJQUNFLGdCQUFPO0VDY1Q7QUFDRjtBRGJ3QjtFQUloQjtJQUNFLGtCQUFTO0lBQ1QsUUFBTTtJQUNOLE1BQUk7RUNZWjtFRFhNO0lBQ0UsWUFBTztJQUNQLFdBQU07SUFDTixzQkFBYztFQ2F0QjtFRFZNO0lBQ0UsU0FBTztFQ1lmO0FBQ0Y7QURYd0I7RUFJaEI7SUFDRSxRQUFNO0lBQ04sTUFBSTtJQUNKLDRCQUFvQjtFQ1U1QjtFRFJJO0lBQ0UsU0FBTztFQ1ViO0VEUk07SUFDRSxZQUFPO0VDVWY7QUFDRjtBQUNBLDBEQUEwRCIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc3R5bCIsInNvdXJjZXNDb250ZW50IjpbIiRuYWlrLWJsdWUgPSAjMjAyZDQzXG4kbmFpay15ZWxsb3cgPSAjZjNiZDNjXG4kbmFpay1vcmFuZ2UgPSAjZGE0ZjM1XG5cbi51bS1zZWN0aW9uXG4gICYtLWFib3V0XG4gICAgYmFja2dyb3VuZCAjMjAyZDQzXG4gICAgY29sb3Igd2hpdGVcbiAgICAudW0taW1nXG4gICAgICAmLS1jaXJjbGVcbiAgICAgICAgaGVpZ2h0IDgwdmhcbiAgICAgICAgd2lkdGggODB2aFxuICAgICAgICBib3JkZXItcmFkaXVzIDAgNTAlIDUwJSAwXG4gICAgICAmLS1hYm91dC11c1xuICAgICAgICBwb3NpdGlvbiBhYnNvbHV0ZVxuICAgICAgICByaWdodCAxMHZoXG4gICAgICAgIHRvcCAzdmhcbiAgICAgICAgYmFja2dyb3VuZCB1cmwoXCIvYXNzZXRzL2ltYWdlcy9hYm91dC11cy5qcGdcIilcbiAgICAgICAgYmFja2dyb3VuZC1zaXplIGNvdmVyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24gNTAlIDUwJVxuXG4gICYtLXByb2R1Y3RzXG4gICAgYmFja2dyb3VuZC1pbWFnZSBsaW5lYXItZ3JhZGllbnQod2hpdGUsICNjY2NhY2QpIC8vI2U2ZTZlNilcbiAgICAmX19pbmZvXG4gICAgICBtaW4taGVpZ2h0IDgwdmhcbiAgICAgIG1hcmdpbiAzZW0gMCAxZW1cbiAgICAudW0taW1nLS1nbGFzc2VzXG4gICAgICBtYXJnaW4tdG9wIC0zMHB4XG4gICAgICBoZWlnaHQgODV2aFxuICAgICAgd2lkdGggMTAwJVxuICAgICAgYmFja2dyb3VuZCB1cmwoXCIvYXNzZXRzL2ltYWdlcy9wcm9kdWN0MS5qcGdcIilcbiAgICAgIGJhY2tncm91bmQtc2l6ZSBjb3ZlclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbiA1MCUgNTAlXG5cbiAgJi0tZGVtb1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIGRhcmtlbigjMzU1NjkxLCAxMCksICMzNTU2OTEsIGxpZ2h0ZW4oIzM1NTY5MSwgMTUpKTtcbiAgICAudW0tdGl0bGVcbiAgICAgIGNvbG9yICNmYWZhZmFcbiAgICAudW0tYnRuXG4gICAgICBib3JkZXIgc29saWQgMXB4ICRuYWlrLXllbGxvd1xuICAgICAgbGV0dGVyLXNwYWNpbmcgMnB4XG4gICAgICBmb250LXNpemUgMmVtXG4gICAgICBjb2xvciAkbmFpay15ZWxsb3dcbiAgICAgIHdpZHRoIDMwdmhcbiAgICAgIGhlaWdodCAxMHZoXG4gICAgICBkaXNwbGF5IGZsZXhcbiAgICAgIGp1c3RpZnktY29udGVudCBjZW50ZXJcbiAgICAgIGFsaWduLWl0ZW1zIGNlbnRlclxuICAgICAgJjpob3ZlclxuICAgICAgICBiYWNrZ3JvdW5kICRuYWlrLXllbGxvd1xuICAgICAgICBjb2xvciAjZmFmYWZhXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbiBub25lXG5cbiAgJi0tY29udGFjdFxuICAgIGJhY2tncm91bmQgdXJsKFwiL2Fzc2V0cy9pbWFnZXMvY29udGFjdC5qcGdcIilcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uIDUwJSA1MCVcbiAgICBiYWNrZ3JvdW5kLXNpemUgY292ZXJcbiAgICBjb2xvciB3aGl0ZVxuICAgIHBhZGRpbmcgMFxuICAgIC51bS10aXRsZVxuICAgICAgdGV4dC1hbGlnbiBjZW50ZXJcblxuICAmLS1mb290ZXJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvciAkbmFpay1ibHVlXG4gICAgICAgIGNvbG9yIHdoaXRlXG4gICAgICAgIG1pbi1oZWlnaHQgNTBweFxuICAgICAgICBmb250LXNpemUgMTJweFxuICAgICAgICBsZXR0ZXItc3BhY2luZyAxcHhcbiAgICAgICAgZm9udC13ZWlnaHQgMTAwXG4gICAgICAgIHBhZGRpbmcgMmVtIDNlbVxuICAgICAgICB0ZXh0LWFsaWduIGNlbnRlclxuXG5cbi51bS1iYWNrZ3JvdW5kXG4gICYtLWltYWdlLTFcbiAgICBiYWNrZ3JvdW5kIHVybChcIi9hc3NldHMvaW1hZ2VzL3Byb2R1Y3QyLmpwZ1wiKVxuICAgIGJhY2tncm91bmQtc2l6ZSBjb3ZlclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24gNTAlIDUwJVxuICAgICYudW0tYm94LWNvbnRhaW5lclxuICAgICAgY29sb3Igd2hpdGVcbiAgICAgIGJvcmRlciBzb2xpZCAycHggJG5haWstb3JhbmdlXG4gICAgICAudW0tdGl0bGVcbiAgICAgICAgYmFja2dyb3VuZCAkbmFpay1vcmFuZ2VcbiAgICAgIC51bS10ZXh0XG4gICAgICAgIGJhY2tncm91bmQgcmdiYShibGFjaywgLjQpXG4gICYtLWltYWdlLTJcbiAgICBiYWNrZ3JvdW5kIHVybChcIi9hc3NldHMvaW1hZ2VzL3Byb2R1Y3Q0LmpwZ1wiKVxuICAgIGJhY2tncm91bmQtc2l6ZSBjb3ZlclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24gNTAlIDUwJVxuICAgICYudW0tYm94LWNvbnRhaW5lclxuICAgICAgY29sb3Igd2hpdGVcbiAgICAgIGJvcmRlciBzb2xpZCAycHggJG5haWstYmx1ZVxuICAgICAgLnVtLXRpdGxlXG4gICAgICAgIGJhY2tncm91bmQgJG5haWstYmx1ZVxuICAgICAgLnVtLXRleHRcbiAgICAgICAgYmFja2dyb3VuZCByZ2JhKGJsYWNrLCAuNSlcbiAgJi0taW1hZ2UtM1xuICAgIGJhY2tncm91bmQgdXJsKFwiL2Fzc2V0cy9pbWFnZXMvcHJvZHVjdDMuanBnXCIpXG4gICAgYmFja2dyb3VuZC1zaXplIGNvdmVyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbiA1MCUgNTAlXG4gICAgJi51bS1ib3gtY29udGFpbmVyXG4gICAgICBjb2xvciB3aGl0ZVxuICAgICAgYm9yZGVyIHNvbGlkIDJweCAkbmFpay15ZWxsb3dcbiAgICAgIC51bS10aXRsZVxuICAgICAgICBiYWNrZ3JvdW5kICRuYWlrLXllbGxvd1xuICAgICAgLnVtLXRleHRcbiAgICAgICAgYmFja2dyb3VuZCByZ2JhKGJsYWNrLCAuNilcblxuXG4udW0tYmFja2dyb3VuZC1sYXllclxuICB3aWR0aCAxMDAlXG4gIGJhY2tncm91bmQgcmdiYShibGFjaywgLjUpXG4gIHBhZGRpbmcgM2VtIDJlbVxuXG5cbi51bS1ib3gtY29udGFpbmVyXG4gIG1hcmdpbiAxZW0gMFxuICAmX190aXRsZVxuICAgIHRleHQtdHJhbnNmb3JtIHVwcGVyY2FzZVxuICAgIHBhZGRpbmcgLjVlbSAwXG4gICAgY29sb3Igd2hpdGVcbiAgICB0ZXh0LWFsaWduIGNlbnRlclxuICAgIGZvbnQtc2l6ZSAxOHB4XG4gICZfX3RleHRcbiAgICBwYWRkaW5nIDFlbSAuNWVtXG4gICAgdWxcbiAgICAgIG1pbi1oZWlnaHQgMzV2aFxuICAgICAgbWFyZ2luIDBcbiAgICAgIHBhZGRpbmcgMFxuICAgICAgZGlzcGxheSBmbGV4XG4gICAgICBmbGV4LWRpcmVjdGlvbiBjb2x1bW5cbiAgICAgIGp1c3RpZnktY29udGVudCBzcGFjZS1ldmVubHlcbiAgICBsaVxuICAgICAgdGV4dC1hbGlnbiBjZW50ZXJcbiAgICAgIHBhZGRpbmcgLjVlbVxuICAgICAgZm9udC1zaXplIDE2cHhcbiAgICAgIGxpc3Qtc3R5bGUgbm9uZVxuICAgICAgJjpub3QoOmxhc3QtY2hpbGQpXG4gICAgICAgIGJvcmRlci1ib3R0b20gc29saWQgMXB4ICNmYWZhZmFcblxuXG4udW0tdGl0bGVcbiAgcGFkZGluZy1ib3R0b20gMWVtXG5cbi51bS10ZXh0XG4gIGZvbnQtc2l6ZSAxLjJlbVxuXG4udW0tYWJvdXRcbiAgY29sb3Igd2hpdGVcbiAgd2lkdGggMTAwJVxuXG4udW0taGVhZGVyLXRleHRcbiAgbGV0dGVyLXNwYWNpbmcgMnB4XG4gIGZvbnQtd2VpZ2h0IDEwMFxuXG4udW0tbmF2YmFyXG4gIHdpZHRoIDEwMCVcblxuLm5hdmJhclxuICBwYWRkaW5nIDFyZW0gM3JlbVxuICBib3JkZXItYm90dG9tIDRweCBzb2xpZCAjZGNlZmU5XG4gIGJhY2tncm91bmQgI2ZhZmFmYVxuICAmOmhvdmVyXG4gICAgLmltZy1mbHVpZFxuICAgICAgd2lkdGggMTE1cHghaW1wb3J0YW50XG4gIC5pbWctZmx1aWRcbiAgICB0cmFuc2l0aW9uIHdpZHRoIDI1MG1zIGVhc2UtaW4tb3V0XG4gIC5uYXYtaXRlbVxuICAgIGxldHRlci1zcGFjaW5nIDFweFxuICAgIG1hcmdpbiAwIDFyZW1cbiAgICAubmF2LWxpbmtcbiAgICAgICY6aG92ZXJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uIHVuZGVybGluZVxuICAgICAgICBjdXJzb3IgcG9pbnRlclxuXG5cbi5mb3JtLWNvbnRyb2xcbiAgYm9yZGVyLXJhZGl1cyAwXG4gIGNvbG9yIHdoaXRlXG5cbiAgJjpub3QoW3R5cGU9J3N1Ym1pdCddKVxuICAgIGJhY2tncm91bmQgcmdiYShibGFjaywgLjIpXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweClcbiAgLnVtLXNlY3Rpb25cbiAgICAmLS1wcm9kdWN0c1xuICAgICAgJl9faW5mb1xuICAgICAgICBtYXJnaW4gMFxuICAgICAgLnVtLWltZ1xuICAgICAgICAmLS1nbGFzc2VzXG4gICAgICAgICAgZGlzcGxheSBub25lXG4gIC51bS1ib3gtY29udGFpbmVyXG4gICAgbWFyZ2luIDFlbSAtMWVtXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweClcbiAgLnVtLXNlY3Rpb25cbiAgICAmLS1hYm91dFxuICAgICAgLnVtLWltZ1xuICAgICAgICAmLS1hYm91dC11c1xuICAgICAgICAgIHBvc2l0aW9uIHJlbGF0aXZlXG4gICAgICAgICAgcmlnaHQgMFxuICAgICAgICAgIHRvcCAwXG4gICAgICAgICYtLWNpcmNsZVxuICAgICAgICAgIGhlaWdodCAzMHZoXG4gICAgICAgICAgd2lkdGggMzB2aFxuICAgICAgICAgIGJvcmRlci1yYWRpdXMgNTAlIDUwJVxuICAgICYtLXByb2R1Y3RzXG4gICAgICAudW0taW1nXG4gICAgICAgICYtLWdsYXNzZXNcbiAgICAgICAgICBtYXJnaW4gMFxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpXG4gIC51bS1zZWN0aW9uXG4gICAgJi0tYWJvdXRcbiAgICAgIC51bS1pbWdcbiAgICAgICAgJi0tYWJvdXQtdXNcbiAgICAgICAgICByaWdodCAwXG4gICAgICAgICAgdG9wIDBcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uIDMwJSA1MCVcbiAgICAmLS1wcm9kdWN0c1xuICAgICAgJl9faW5mb1xuICAgICAgICBtYXJnaW4gMFxuICAgICAgLnVtLWltZ1xuICAgICAgICAmLS1nbGFzc2VzXG4gICAgICAgICAgaGVpZ2h0IDc1dmhcblxuXG4iLCIudW0tc2VjdGlvbi0tYWJvdXQge1xuICBiYWNrZ3JvdW5kOiAjMjAyZDQzO1xuICBjb2xvcjogI2ZmZjtcbn1cbi51bS1zZWN0aW9uLS1hYm91dCAudW0taW1nLS1jaXJjbGUge1xuICBoZWlnaHQ6IDgwdmg7XG4gIHdpZHRoOiA4MHZoO1xuICBib3JkZXItcmFkaXVzOiAwIDUwJSA1MCUgMDtcbn1cbi51bS1zZWN0aW9uLS1hYm91dCAudW0taW1nLS1hYm91dC11cyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwdmg7XG4gIHRvcDogM3ZoO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9hYm91dC11cy5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG59XG4udW0tc2VjdGlvbi0tcHJvZHVjdHMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoI2ZmZiwgI2NjY2FjZCk7XG59XG4udW0tc2VjdGlvbi0tcHJvZHVjdHNfX2luZm8ge1xuICBtaW4taGVpZ2h0OiA4MHZoO1xuICBtYXJnaW46IDNlbSAwIDFlbTtcbn1cbi51bS1zZWN0aW9uLS1wcm9kdWN0cyAudW0taW1nLS1nbGFzc2VzIHtcbiAgbWFyZ2luLXRvcDogLTMwcHg7XG4gIGhlaWdodDogODV2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL3Byb2R1Y3QxLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbn1cbi51bS1zZWN0aW9uLS1kZW1vIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzI3NDA2YywgIzM1NTY5MSwgIzUzN2FjMCk7XG59XG4udW0tc2VjdGlvbi0tZGVtbyAudW0tdGl0bGUge1xuICBjb2xvcjogI2ZhZmFmYTtcbn1cbi51bS1zZWN0aW9uLS1kZW1vIC51bS1idG4ge1xuICBib3JkZXI6IHNvbGlkIDFweCAjZjNiZDNjO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBmb250LXNpemU6IDJlbTtcbiAgY29sb3I6ICNmM2JkM2M7XG4gIHdpZHRoOiAzMHZoO1xuICBoZWlnaHQ6IDEwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnVtLXNlY3Rpb24tLWRlbW8gLnVtLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmM2JkM2M7XG4gIGNvbG9yOiAjZmFmYWZhO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4udW0tc2VjdGlvbi0tY29udGFjdCB7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL2NvbnRhY3QuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMDtcbn1cbi51bS1zZWN0aW9uLS1jb250YWN0IC51bS10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi51bS1zZWN0aW9uLS1mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyZDQzO1xuICBjb2xvcjogI2ZmZjtcbiAgbWluLWhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBwYWRkaW5nOiAyZW0gM2VtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udW0tYmFja2dyb3VuZC0taW1hZ2UtMSB7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL3Byb2R1Y3QyLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbn1cbi51bS1iYWNrZ3JvdW5kLS1pbWFnZS0xLnVtLWJveC1jb250YWluZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBzb2xpZCAycHggI2RhNGYzNTtcbn1cbi51bS1iYWNrZ3JvdW5kLS1pbWFnZS0xLnVtLWJveC1jb250YWluZXIgLnVtLXRpdGxlIHtcbiAgYmFja2dyb3VuZDogI2RhNGYzNTtcbn1cbi51bS1iYWNrZ3JvdW5kLS1pbWFnZS0xLnVtLWJveC1jb250YWluZXIgLnVtLXRleHQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNCk7XG59XG4udW0tYmFja2dyb3VuZC0taW1hZ2UtMiB7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL3Byb2R1Y3Q0LmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbn1cbi51bS1iYWNrZ3JvdW5kLS1pbWFnZS0yLnVtLWJveC1jb250YWluZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBzb2xpZCAycHggIzIwMmQ0Mztcbn1cbi51bS1iYWNrZ3JvdW5kLS1pbWFnZS0yLnVtLWJveC1jb250YWluZXIgLnVtLXRpdGxlIHtcbiAgYmFja2dyb3VuZDogIzIwMmQ0Mztcbn1cbi51bS1iYWNrZ3JvdW5kLS1pbWFnZS0yLnVtLWJveC1jb250YWluZXIgLnVtLXRleHQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNSk7XG59XG4udW0tYmFja2dyb3VuZC0taW1hZ2UtMyB7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL3Byb2R1Y3QzLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbn1cbi51bS1iYWNrZ3JvdW5kLS1pbWFnZS0zLnVtLWJveC1jb250YWluZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBzb2xpZCAycHggI2YzYmQzYztcbn1cbi51bS1iYWNrZ3JvdW5kLS1pbWFnZS0zLnVtLWJveC1jb250YWluZXIgLnVtLXRpdGxlIHtcbiAgYmFja2dyb3VuZDogI2YzYmQzYztcbn1cbi51bS1iYWNrZ3JvdW5kLS1pbWFnZS0zLnVtLWJveC1jb250YWluZXIgLnVtLXRleHQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNik7XG59XG4udW0tYmFja2dyb3VuZC1sYXllciB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNSk7XG4gIHBhZGRpbmc6IDNlbSAyZW07XG59XG4udW0tYm94LWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMWVtIDA7XG59XG4udW0tYm94LWNvbnRhaW5lcl9fdGl0bGUge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nOiAwLjVlbSAwO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG59XG4udW0tYm94LWNvbnRhaW5lcl9fdGV4dCB7XG4gIHBhZGRpbmc6IDFlbSAwLjVlbTtcbn1cbi51bS1ib3gtY29udGFpbmVyX190ZXh0IHVsIHtcbiAgbWluLWhlaWdodDogMzV2aDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cbi51bS1ib3gtY29udGFpbmVyX190ZXh0IGxpIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLnVtLWJveC1jb250YWluZXJfX3RleHQgbGk6bm90KDpsYXN0LWNoaWxkKSB7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZmFmYWZhO1xufVxuLnVtLXRpdGxlIHtcbiAgcGFkZGluZy1ib3R0b206IDFlbTtcbn1cbi51bS10ZXh0IHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbn1cbi51bS1hYm91dCB7XG4gIGNvbG9yOiAjZmZmO1xuICB3aWR0aDogMTAwJTtcbn1cbi51bS1oZWFkZXItdGV4dCB7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG4udW0tbmF2YmFyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubmF2YmFyIHtcbiAgcGFkZGluZzogMXJlbSAzcmVtO1xuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgI2RjZWZlOTtcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbn1cbi5uYXZiYXI6aG92ZXIgLmltZy1mbHVpZCB7XG4gIHdpZHRoOiAxMTVweCAhaW1wb3J0YW50O1xufVxuLm5hdmJhciAuaW1nLWZsdWlkIHtcbiAgdHJhbnNpdGlvbjogd2lkdGggMjUwbXMgZWFzZS1pbi1vdXQ7XG59XG4ubmF2YmFyIC5uYXYtaXRlbSB7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIG1hcmdpbjogMCAxcmVtO1xufVxuLm5hdmJhciAubmF2LWl0ZW0gLm5hdi1saW5rOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5mb3JtLWNvbnRyb2wge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5mb3JtLWNvbnRyb2w6bm90KFt0eXBlPSdzdWJtaXQnXSkge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMik7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLnVtLXNlY3Rpb24tLXByb2R1Y3RzX19pbmZvIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgLnVtLXNlY3Rpb24tLXByb2R1Y3RzIC51bS1pbWctLWdsYXNzZXMge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLnVtLWJveC1jb250YWluZXIge1xuICAgIG1hcmdpbjogMWVtIC0xZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAudW0tc2VjdGlvbi0tYWJvdXQgLnVtLWltZy0tYWJvdXQtdXMge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gIH1cbiAgLnVtLXNlY3Rpb24tLWFib3V0IC51bS1pbWctLWNpcmNsZSB7XG4gICAgaGVpZ2h0OiAzMHZoO1xuICAgIHdpZHRoOiAzMHZoO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJSA1MCU7XG4gIH1cbiAgLnVtLXNlY3Rpb24tLXByb2R1Y3RzIC51bS1pbWctLWdsYXNzZXMge1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC51bS1zZWN0aW9uLS1hYm91dCAudW0taW1nLS1hYm91dC11cyB7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDMwJSA1MCU7XG4gIH1cbiAgLnVtLXNlY3Rpb24tLXByb2R1Y3RzX19pbmZvIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgLnVtLXNlY3Rpb24tLXByb2R1Y3RzIC51bS1pbWctLWdsYXNzZXMge1xuICAgIGhlaWdodDogNzV2aDtcbiAgfVxufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcy5tYXAgKi8iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");



var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.state = 'big';
    }
    HomeComponent.prototype.scrollMe = function (event) {
        var scrollPosition = window.pageYOffset;
        if (scrollPosition >= 10) {
            this.state = 'small';
        }
        else {
            this.state = 'big';
        }
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], HomeComponent.prototype, "scrollMe", null);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('scrollAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('big', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        width: '115px'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('small', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        width: '75px'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('big => small', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('700ms ease-out')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('small => big', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms ease-in'))
                ])
            ],
            styles: [__webpack_require__(/*! ./home.component.styl */ "./src/app/home/home.component.styl")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/image/image.component.styl":
/*!********************************************!*\
  !*** ./src/app/image/image.component.styl ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host() {\n  text-transform: capitalize;\n}\n.um-section {\n  justify-content: center;\n  align-items: center;\n}\n.modal-header {\n  padding-top: 3rem;\n}\n.um-section {\n  padding-top: 8rem;\n}\n#inLinePreviewImg {\n  max-height: 3rem;\n  max-width: 5rem;\n  margin-right: 1rem;\n}\n#noImgNotice {\n  padding-top: 2rem;\n  text-align: center;\n}\ninput[type = \"file\"] {\n  visibility: hidden;\n}\nimg {\n  height: 5rem;\n  margin: 1rem 0;\n}\n/*# sourceMappingURL=src/app/image/image.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW1hZ2Uvc3JjL2FwcC9pbWFnZS9pbWFnZS5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvaW1hZ2UvaW1hZ2UuY29tcG9uZW50LnN0eWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBZTtBQ0NqQjtBRENBO0VBQ0UsdUJBQWdCO0VBQ2hCLG1CQUFZO0FDQ2Q7QURDQTtFQUNFLGlCQUFZO0FDQ2Q7QURDQTtFQUNFLGlCQUFZO0FDQ2Q7QURDQTtFQUNFLGdCQUFXO0VBQ1gsZUFBVTtFQUNWLGtCQUFhO0FDQ2Y7QURDQTtFQUNFLGlCQUFZO0VBQ1osa0JBQVc7QUNDYjtBRENBO0VBQ0Usa0JBQVc7QUNDYjtBRFdBO0VBQ0UsWUFBUTtFQUNSLGNBQVE7QUNUVjtBQUNBLDREQUE0RCIsImZpbGUiOiJzcmMvYXBwL2ltYWdlL2ltYWdlLmNvbXBvbmVudC5zdHlsIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QoKVxuICB0ZXh0LXRyYW5zZm9ybSBjYXBpdGFsaXplXG5cbi51bS1zZWN0aW9uXG4gIGp1c3RpZnktY29udGVudCBjZW50ZXJcbiAgYWxpZ24taXRlbXMgY2VudGVyXG5cbi5tb2RhbC1oZWFkZXJcbiAgcGFkZGluZy10b3AgM3JlbVxuXG4udW0tc2VjdGlvblxuICBwYWRkaW5nLXRvcCA4cmVtXG5cbiNpbkxpbmVQcmV2aWV3SW1nXG4gIG1heC1oZWlnaHQgM3JlbVxuICBtYXgtd2lkdGggNXJlbVxuICBtYXJnaW4tcmlnaHQgMXJlbVxuXG4jbm9JbWdOb3RpY2VcbiAgcGFkZGluZy10b3AgMnJlbVxuICB0ZXh0LWFsaWduIGNlbnRlclxuXG5pbnB1dFt0eXBlID0gXCJmaWxlXCJdXG4gIHZpc2liaWxpdHkgaGlkZGVuXG5cbi8vIGltZ1tfbmdjb250ZW50LWMzXSB7XG4vLyAgIGhlaWdodDogNXJlbVxuLy8gICBtYXJnaW46IDFyZW0gMFxuLy8gfVxuXG4vLyBpbWdbX25nY29udGVudC1jN10ge1xuLy8gICBoZWlnaHQ6IDVyZW1cbi8vICAgbWFyZ2luOiAxcmVtIDBcbi8vIH1cblxuaW1nXG4gIGhlaWdodDogNXJlbVxuICBtYXJnaW46IDFyZW0gMFxuXG4iLCI6aG9zdCgpIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4udW0tc2VjdGlvbiB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1vZGFsLWhlYWRlciB7XG4gIHBhZGRpbmctdG9wOiAzcmVtO1xufVxuLnVtLXNlY3Rpb24ge1xuICBwYWRkaW5nLXRvcDogOHJlbTtcbn1cbiNpbkxpbmVQcmV2aWV3SW1nIHtcbiAgbWF4LWhlaWdodDogM3JlbTtcbiAgbWF4LXdpZHRoOiA1cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG4jbm9JbWdOb3RpY2Uge1xuICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW5wdXRbdHlwZSA9IFwiZmlsZVwiXSB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbmltZyB7XG4gIGhlaWdodDogNXJlbTtcbiAgbWFyZ2luOiAxcmVtIDA7XG59XG4vKiMgc291cmNlTWFwcGluZ1VSTD1zcmMvYXBwL2ltYWdlL2ltYWdlLmNvbXBvbmVudC5jc3MubWFwICovIl19 */"

/***/ }),

/***/ "./src/app/image/image.component.ts":
/*!******************************************!*\
  !*** ./src/app/image/image.component.ts ***!
  \******************************************/
/*! exports provided: ImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageComponent", function() { return ImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-gallery/core */ "./node_modules/@ngx-gallery/core/fesm5/ngx-gallery-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");





var ImageComponent = /** @class */ (function () {
    function ImageComponent(route, gallery) {
        this.route = route;
        this.gallery = gallery;
        this.galleryId = 'eyeglassImg';
        this.items = [];
    }
    ImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clientId = this.route.snapshot.params.client_id;
        this.route.params.subscribe(function (params) {
            _this.eyeglassId = params['eyeglass_id'];
        });
    };
    ImageComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_2__["Gallery"] }
    ]; };
    ImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-image',
            template: __webpack_require__(/*! raw-loader!./image.component.html */ "./node_modules/raw-loader/index.js!./src/app/image/image.component.html"),
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCarouselConfig"]],
            styles: [__webpack_require__(/*! ./image.component.styl */ "./src/app/image/image.component.styl")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_2__["Gallery"]])
    ], ImageComponent);
    return ImageComponent;
}());



/***/ }),

/***/ "./src/app/image/image.model.ts":
/*!**************************************!*\
  !*** ./src/app/image/image.model.ts ***!
  \**************************************/
/*! exports provided: ImageModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageModel", function() { return ImageModel; });
// import {ClientModel} from '../clients/client.model';
var ImageModel = /** @class */ (function () {
    function ImageModel(image) {
        if (image) {
            this.id = image._id;
            this.client = image.client;
            this.eyeglass = image.eyeglass;
            this.colorupc = image.colorupc;
            this.uid = image.uid;
            this.imageName = image.imageName;
            this.thumbUrl = image.thumbUrl;
            this.postUrl = image.postUrl;
        }
    }
    ImageModel.ctorParameters = function () { return [
        null
    ]; };
    return ImageModel;
}());



/***/ }),

/***/ "./src/app/login/login.component.styl":
/*!********************************************!*\
  !*** ./src/app/login/login.component.styl ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".um-section {\n  height: 100vh;\n}\n.um-btn {\n  padding: 0.5em 4em;\n  width: 100%;\n}\n.row {\n  height: -webkit-fill-available;\n  height: -moz-available;\n  height: stretch;\n}\n.form-group {\n  display: flex;\n  align-items: center;\n}\n.form-group .form-control {\n  height: 50px;\n  background: #fafafa;\n  border: solid 1px #202d43;\n  border-radius: 0;\n  padding: 0.5em;\n}\n.um-form-icon {\n  width: 50px;\n  height: 50px;\n  display: flex;\n  background: #202d43;\n  color: #fff;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=src/app/login/login.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vc3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnN0eWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxhQUFPO0FDSFQ7QURLQTtFQUNFLGtCQUFRO0VBQ1IsV0FBTTtBQ0hSO0FES0E7RUFDRSw4QkFBTztFQUFQLHNCQUFPO0VBQVAsZUFBTztBQ0hUO0FES0E7RUFDRSxhQUFRO0VBQ1IsbUJBQVk7QUNIZDtBRElFO0VBQ0UsWUFBTztFQUNQLG1CQUFXO0VBQ1gseUJBQU87RUFDUCxnQkFBYztFQUNkLGNBQVE7QUNGWjtBRElBO0VBQ0UsV0FBTTtFQUNOLFlBQU87RUFDUCxhQUFRO0VBQ1IsbUJBQVc7RUFDWCxXQUFNO0VBQ04sdUJBQWdCO0VBQ2hCLG1CQUFZO0FDRmQ7QUFDQSw0REFBNEQiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc3R5bCIsInNvdXJjZXNDb250ZW50IjpbIiRuYWlrLWJsdWUgPSAjMjAyZDQzXG4kbmFpay15ZWxsb3cgPSAjZjNiZDNjXG4kbmFpay1vcmFuZ2UgPSAjZGE0ZjM1XG5cbi51bS1zZWN0aW9uXG4gIGhlaWdodCAxMDB2aFxuXG4udW0tYnRuXG4gIHBhZGRpbmcgLjVlbSA0ZW1cbiAgd2lkdGggMTAwJVxuXG4ucm93XG4gIGhlaWdodCBzdHJldGNoXG5cbi5mb3JtLWdyb3VwXG4gIGRpc3BsYXkgZmxleFxuICBhbGlnbi1pdGVtcyBjZW50ZXJcbiAgLmZvcm0tY29udHJvbFxuICAgIGhlaWdodCA1MHB4XG4gICAgYmFja2dyb3VuZCAjZmFmYWZhXG4gICAgYm9yZGVyIHNvbGlkIDFweCAkbmFpay1ibHVlXG4gICAgYm9yZGVyLXJhZGl1cyAwXG4gICAgcGFkZGluZyAuNWVtXG5cbi51bS1mb3JtLWljb25cbiAgd2lkdGggNTBweFxuICBoZWlnaHQgNTBweFxuICBkaXNwbGF5IGZsZXhcbiAgYmFja2dyb3VuZCAkbmFpay1ibHVlXG4gIGNvbG9yIHdoaXRlXG4gIGp1c3RpZnktY29udGVudCBjZW50ZXJcbiAgYWxpZ24taXRlbXMgY2VudGVyXG5cblxuIiwiLnVtLXNlY3Rpb24ge1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuLnVtLWJ0biB7XG4gIHBhZGRpbmc6IDAuNWVtIDRlbTtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucm93IHtcbiAgaGVpZ2h0OiBzdHJldGNoO1xufVxuLmZvcm0tZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmZvcm0tZ3JvdXAgLmZvcm0tY29udHJvbCB7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzIwMmQ0MztcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgcGFkZGluZzogMC41ZW07XG59XG4udW0tZm9ybS1pY29uIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZDogIzIwMmQ0MztcbiAgY29sb3I6ICNmZmY7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzLm1hcCAqLyJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/session.service */ "./src/app/services/session.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _user_user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user/user.model */ "./src/app/user/user.model.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(sessionService, route, router, modalService) {
        this.sessionService = sessionService;
        this.route = route;
        this.router = router;
        this.modalService = modalService;
        this.user = {};
        this.newUser = {};
        this.isAlertOpen = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.sessionService.hasLogin()) {
            var userSession = this.sessionService.getUser();
            if (userSession.role === 'admin') {
                this.router.navigate(['/profile/clients']);
            }
            else {
                this.router.navigate(['/', 'profile', userSession.client, 'eyeglasses']);
            }
        }
    };
    LoginComponent.prototype.onModalRegisterOpen = function (modal) {
        this.modalService.open(modal, { size: 'lg', centered: true });
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        this.sessionService.logIn(this.user).subscribe(function (data) {
            var userSession = new _user_user_model__WEBPACK_IMPORTED_MODULE_5__["UserModel"](data.user);
            _this.sessionService.setUser(userSession);
            if (userSession.role === 'admin') {
                _this.router.navigate(['/profile/clients']);
            }
            else {
                _this.router.navigate(['/', 'profile', userSession.client, 'eyeglasses']);
            }
        }, function (error) {
            _this.alertMessage = 'Your email or password is incorrect.';
            _this.isAlertOpen = true;
            setTimeout(function () {
                _this.isAlertOpen = false;
            }, 5000);
        }, function () {
            console.log('Successful login');
        });
    };
    LoginComponent.prototype.onFormSubmit = function (form) {
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _services_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.styl */ "./src/app/login/login.component.styl")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.styl":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.styl ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".um-navbar {\n  width: 100%;\n}\n.um-header-text {\n  letter-spacing: 2px;\n  font-weight: 100;\n}\n.navbar {\n  padding: 1rem 3rem;\n  border-bottom: 4px solid #dcefe9;\n  background: #fafafa;\n}\n.navbar .img-fluid {\n  width: 115px;\n  transition: width 250ms ease-in-out;\n}\n.navbar .nav-item {\n  letter-spacing: 1px;\n  margin: 0 1rem;\n}\n.navbar .nav-item .nav-link:hover {\n  text-decoration: underline;\n  cursor: pointer;\n}\n/*# sourceMappingURL=src/app/navbar/navbar.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL3NyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQU07QUNDUjtBRENBO0VBQ0UsbUJBQWU7RUFDZixnQkFBWTtBQ0NkO0FEQ0E7RUFDRSxrQkFBUTtFQUNSLGdDQUFjO0VBQ2QsbUJBQVc7QUNDYjtBREFFO0VBQ0UsWUFBTTtFQUNOLG1DQUFXO0FDRWY7QURERTtFQUNFLG1CQUFlO0VBQ2YsY0FBTztBQ0dYO0FERE07RUFDRSwwQkFBZ0I7RUFDaEIsZUFBTztBQ0dmO0FBQ0EsOERBQThEIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc3R5bCIsInNvdXJjZXNDb250ZW50IjpbIi51bS1uYXZiYXJcbiAgd2lkdGggMTAwJVxuXG4udW0taGVhZGVyLXRleHRcbiAgbGV0dGVyLXNwYWNpbmcgMnB4XG4gIGZvbnQtd2VpZ2h0IDEwMFxuXG4ubmF2YmFyXG4gIHBhZGRpbmcgMXJlbSAzcmVtXG4gIGJvcmRlci1ib3R0b20gNHB4IHNvbGlkICNkY2VmZTlcbiAgYmFja2dyb3VuZCAjZmFmYWZhXG4gIC5pbWctZmx1aWRcbiAgICB3aWR0aCAxMTVweFxuICAgIHRyYW5zaXRpb24gd2lkdGggMjUwbXMgZWFzZS1pbi1vdXRcbiAgLm5hdi1pdGVtXG4gICAgbGV0dGVyLXNwYWNpbmcgMXB4XG4gICAgbWFyZ2luIDAgMXJlbVxuICAgIC5uYXYtbGlua1xuICAgICAgJjpob3ZlclxuICAgICAgICB0ZXh0LWRlY29yYXRpb24gdW5kZXJsaW5lXG4gICAgICAgIGN1cnNvciBwb2ludGVyXG4iLCIudW0tbmF2YmFyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4udW0taGVhZGVyLXRleHQge1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBmb250LXdlaWdodDogMTAwO1xufVxuLm5hdmJhciB7XG4gIHBhZGRpbmc6IDFyZW0gM3JlbTtcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNkY2VmZTk7XG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XG59XG4ubmF2YmFyIC5pbWctZmx1aWQge1xuICB3aWR0aDogMTE1cHg7XG4gIHRyYW5zaXRpb246IHdpZHRoIDI1MG1zIGVhc2UtaW4tb3V0O1xufVxuLm5hdmJhciAubmF2LWl0ZW0ge1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBtYXJnaW46IDAgMXJlbTtcbn1cbi5uYXZiYXIgLm5hdi1pdGVtIC5uYXYtbGluazpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4vKiMgc291cmNlTWFwcGluZ1VSTD1zcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcy5tYXAgKi8iXX0= */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/session.service */ "./src/app/services/session.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(apiService, router, route, sessionService) {
        this.apiService = apiService;
        this.router = router;
        this.route = route;
        this.sessionService = sessionService;
        this.navItems = [];
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.url.subscribe(function () {
            _this.companyName = _this.route.snapshot.queryParams['companyName'];
            var url = _this.route.snapshot.firstChild;
            _this.currentLink = url.routeConfig.path;
            console.log("currentLink", _this.currentLink);
            switch (_this.currentLink) {
                case ':client_id/:eyeglass_id':
                    _this.currentClient = url.params.client_id;
                    _this.currentEyeglass = url.params.eyeglass_id;
                    _this.navItems = [{
                            name: 'Models',
                            link: ['/', 'profile', _this.currentClient, 'eyeglasses']
                        }, {
                            name: 'Contacts',
                            link: ['/', 'profile', _this.currentClient, 'contacts']
                        }];
                    if (_this.sessionService.getUser().role === 'admin') {
                        _this.navItems.push({
                            name: 'Clients',
                            link: ['/', 'profile', 'clients']
                        });
                    }
                    break;
                case ':client_id/eyeglasses':
                    _this.currentClient = url.params.client_id;
                    _this.navItems = [{
                            name: 'Models',
                            link: ['/', 'profile', _this.currentClient, 'eyeglasses']
                        }, {
                            name: 'Contacts',
                            link: ['/', 'profile', _this.currentClient, 'contacts']
                        }];
                    if (_this.sessionService.getUser().role === 'admin') {
                        _this.navItems.push({
                            name: 'Clients',
                            link: ['/', 'profile', 'clients']
                        });
                    }
                    break;
                case 'login':
                    break;
                case 'clients':
                    _this.navItems = [];
                    break;
                default:
                    _this.currentClient = url.params.client_id;
                    _this.navItems = [{
                            name: 'Models',
                            link: ['/', 'profile', _this.currentClient, 'eyeglasses']
                        }, {
                            name: 'Contacts',
                            link: ['/', 'profile', _this.currentClient, 'contacts']
                        }];
                    if (_this.sessionService.getUser().role === 'admin') {
                        _this.navItems.push({
                            name: 'Clients',
                            link: ['/', 'profile', 'clients']
                        });
                    }
                    break;
            }
        });
    };
    NavbarComponent.prototype.logout = function () {
        this.sessionService.logout();
        this.router.navigate(['/', 'profile', 'login']);
    };
    NavbarComponent.prototype.onItemClicked = function (itemIndex) {
        this.router.navigate(this.navItems[itemIndex].link);
    };
    NavbarComponent.prototype.getClientName = function () {
        this.apiService.getClient(this.currentClient);
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["APIService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"] }
    ]; };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.styl */ "./src/app/navbar/navbar.component.styl")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_4__["APIService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.styl":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.styl ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*# sourceMappingURL=src/app/profile/profile.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdFQUFnRSIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc3R5bCJ9 */"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.styl */ "./src/app/profile/profile.component.styl")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: APIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIService", function() { return APIService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _clients_client_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../clients/client.model */ "./src/app/clients/client.model.ts");
/* harmony import */ var _eyeglass_eyeglass_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../eyeglass/eyeglass.model */ "./src/app/eyeglass/eyeglass.model.ts");
/* harmony import */ var _user_user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user/user.model */ "./src/app/user/user.model.ts");
/* harmony import */ var _type_type_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../type/type.model */ "./src/app/type/type.model.ts");
/* harmony import */ var _image_image_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../image/image.model */ "./src/app/image/image.model.ts");
/* harmony import */ var _contacts_billing_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../contacts/billing.model */ "./src/app/contacts/billing.model.ts");









var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var APIService = /** @class */ (function () {
    function APIService(http) {
        this.http = http;
        this.URL_BASE = 'http://localhost:3000/api';
    }
    APIService.prototype.getClients = function () {
        var clients = new Array();
        this.http.get(this.URL_BASE + '/clients')
            .subscribe(function (data) {
            // @ts-ignore
            data.forEach(function (client) {
                clients.push(new _clients_client_model__WEBPACK_IMPORTED_MODULE_3__["ClientModel"](client));
            });
        }, function (err) {
            console.error(err);
        }, function () {
            console.log('Success obtaining clients');
        });
        return clients;
    };
    APIService.prototype.getClient = function (clientId) {
        var client = null;
        this.http.get(this.URL_BASE + '/clients/' + clientId)
            .subscribe(function (data) {
            // @ts-ignore
            client = data;
        }, function (error) {
            console.error(error);
        });
        return client;
    };
    APIService.prototype.addClient = function (client) {
        return this.http.post(this.URL_BASE + '/clients', client);
    };
    APIService.prototype.updateClient = function (clientId, client) {
        return this.http.put(this.URL_BASE + '/clients/' + clientId, client);
    };
    APIService.prototype.deleteClient = function (clientId) {
        return this.http.delete(this.URL_BASE + '/clients/' + clientId);
    };
    // eyeglasses
    APIService.prototype.getEyeglasses = function (clientId) {
        var eyeglassesList = [];
        this.http.get(this.URL_BASE + '/eyeglasses/' + clientId)
            .subscribe(function (data) {
            // @ts-ignore
            data.forEach(function (eyeglass) {
                var newEyeglass = new _eyeglass_eyeglass_model__WEBPACK_IMPORTED_MODULE_4__["EyeglassModel"](eyeglass);
                eyeglassesList.push(newEyeglass);
            });
            eyeglassesList.sort(function (x, y) { return (Number(y.btnAct) - Number(x.btnAct)); });
        }, function (err) {
            console.log(err);
        });
        return eyeglassesList;
    };
    APIService.prototype.getEyeglass = function (eyeglassId) {
        var eyeglass = null;
        this.http.get(this.URL_BASE + '/eyeglasses/' + eyeglassId)
            .subscribe(function (data) {
            // @ts-ignore
            eyeglass = data;
        }, function (error) {
            console.error(error);
        });
        return eyeglass;
    };
    APIService.prototype.addEyeglass = function (eyeglass) {
        return this.http.post(this.URL_BASE + '/eyeglasses/' + eyeglass.client, eyeglass);
    };
    APIService.prototype.updateEyeglass = function (eyeglassId, eyeglass) {
        return this.http.put(this.URL_BASE + '/eyeglasses/' + eyeglassId, eyeglass);
    };
    APIService.prototype.deleteEyeglass = function (eyeglassId) {
        return this.http.delete(this.URL_BASE + '/eyeglasses/' + eyeglassId, { responseType: 'text' });
    };
    APIService.prototype.addUser = function (user) {
        return this.http.post(this.URL_BASE + '/user/register', user);
    };
    // contact
    APIService.prototype.getContacts = function (clientId) {
        var contacts = new Array();
        this.http.get(this.URL_BASE + '/contacts/' + clientId)
            .subscribe(function (data) {
            // @ts-ignore
            data.forEach(function (contact) {
                contacts.push(new _user_user_model__WEBPACK_IMPORTED_MODULE_5__["UserModel"](contact));
            });
        }, function (err) {
            console.error(err);
        }, function () {
            console.log('Success obtaining clients');
        });
        return contacts;
    };
    APIService.prototype.updateContact = function (contact) {
        return this.http.put(this.URL_BASE + '/contact/' + contact.id, contact);
    };
    APIService.prototype.addContact = function (contact) {
        return this.http.post(this.URL_BASE + '/contact', contact);
    };
    APIService.prototype.deleteContact = function (contactId) {
        return this.http.delete(this.URL_BASE + '/contact/' + contactId);
    };
    // billings
    APIService.prototype.addBilling = function (billing) {
        return this.http.post(this.URL_BASE + '/billing', billing);
    };
    APIService.prototype.getBillings = function (clientId) {
        var billings = new Array();
        this.http.get(this.URL_BASE + '/billing/' + clientId)
            .subscribe(function (data) {
            // @ts-ignore
            data.forEach(function (billing) {
                billings.push(new _contacts_billing_model__WEBPACK_IMPORTED_MODULE_8__["BillingModel"](billing));
            });
        }, function (err) {
            console.error(err);
        }, function () {
            console.log('Success obtaining billings');
        });
        return billings;
    };
    APIService.prototype.updateBilling = function (billing) {
        return this.http.put(this.URL_BASE + '/billing/' + billing.id, billing);
    };
    APIService.prototype.deleteBilling = function (billing) {
        return this.http.delete(this.URL_BASE + '/billing/' + billing.id);
    };
    //  types
    APIService.prototype.addType = function (type) {
        return this.http.post(this.URL_BASE + '/types/' + type.client + '/' + type.eyeglass, type);
    };
    APIService.prototype.getTypes = function (clientId, eyeglassId) {
        var typeList = [];
        this.http.get(this.URL_BASE + '/types/' + clientId + '/' + eyeglassId)
            .subscribe(function (data) {
            // @ts-ignore
            data.forEach(function (type) {
                var newType = new _type_type_model__WEBPACK_IMPORTED_MODULE_6__["TypeModel"](type);
                typeList.push(newType);
            });
        }, function (err) {
            console.log(err);
        });
        return typeList;
    };
    APIService.prototype.getType = function (clientId, eyeglassId, colortupc) {
        var type = null;
        this.http.get(this.URL_BASE + '/types/' + clientId + '/' + eyeglassId + '/' + colortupc)
            .subscribe(function (data) {
            // @ts-ignore
            type = data;
        }, function (error) {
            console.error(error);
        });
        return type;
    };
    APIService.prototype.updateType = function (clientId, eyeglassId, colortupc, type) {
        return this.http.put(this.URL_BASE + '/types/' + clientId + '/' + eyeglassId + '/' + colortupc, type);
    };
    APIService.prototype.deleteType = function (type) {
        return this.http.delete(this.URL_BASE + '/types/' + type.client + '/' + type.eyeglass + '/' + type.colorupc, { responseType: 'text' });
    };
    // image
    APIService.prototype.postImage = function (clientId, eyegalssId, colorupc, datas) {
        console.log('newImage before: ', datas);
        var newImage = new _image_image_model__WEBPACK_IMPORTED_MODULE_7__["ImageModel"]();
        newImage.uid = datas.uid;
        newImage.thumbUrl = datas.thumbUrl;
        newImage.imageName = datas.name;
        newImage.colorupc = colorupc;
        newImage.client = clientId;
        newImage.eyeglass = eyegalssId;
        newImage.postUrl = 'www';
        console.log('newImage after: ', newImage);
        return this.http.post(this.URL_BASE + '/images/' + clientId + '/' + eyegalssId + '/' + colorupc, newImage);
    };
    APIService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    APIService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], APIService);
    return APIService;
}());



/***/ }),

/***/ "./src/app/services/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/services/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./session.service */ "./src/app/services/session.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, sessionService) {
        this.router = router;
        this.sessionService = sessionService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var currentUser = this.sessionService.getUser();
        console.log(currentUser);
        if (currentUser) {
            // check if route is restricted by role
            if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
                // role not authorised so redirect to home page
                this.router.navigate(['/']);
                return false;
            }
            // authorised so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/error.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/services/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./session.service */ "./src/app/services/session.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(sessionService) {
        this.sessionService = sessionService;
    }
    ErrorInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            if ([401, 403].indexOf(err.status) !== -1) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                _this.sessionService.logout();
                location.reload(true);
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    };
    ErrorInterceptor.ctorParameters = function () { return [
        { type: _session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"] }
    ]; };
    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/services/jwt.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/services/jwt.interceptor.ts ***!
  \*********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./session.service */ "./src/app/services/session.service.ts");



var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(sessionService) {
        this.sessionService = sessionService;
    }
    JwtInterceptor.prototype.intercept = function (req, next) {
        // add authorization header with jwt token if available
        var currentUser = this.sessionService.getUser();
        if (currentUser && currentUser.token) {
            req = req.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentUser.token
                }
            });
        }
        return next.handle(req);
    };
    JwtInterceptor.ctorParameters = function () { return [
        { type: _session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"] }
    ]; };
    JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]])
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/services/session.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/session.service.ts ***!
  \*********************************************/
/*! exports provided: SessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionService", function() { return SessionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var SessionService = /** @class */ (function () {
    function SessionService(http) {
        this.http = http;
        this.URL_BASE = 'http://localhost:3000/api/user';
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    SessionService.prototype.logIn = function (user) {
        return this.http.post(this.URL_BASE + '/login', user);
    };
    SessionService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    };
    SessionService.prototype.setUser = function (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
    };
    SessionService.prototype.getUser = function () {
        return this.currentUserSubject.value;
    };
    SessionService.prototype.hasLogin = function () {
        return !!this.getUser();
    };
    SessionService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    SessionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SessionService);
    return SessionService;
}());



/***/ }),

/***/ "./src/app/type/type.component.styl":
/*!******************************************!*\
  !*** ./src/app/type/type.component.styl ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host() {\n  text-transform: capitalize;\n}\n.um-section {\n  justify-content: center;\n  align-items: center;\n}\n.um-section {\n  padding-top: 8rem;\n}\n.ant-upload-text {\n  margin-top: 8px;\n  color: #666;\n}\n/*# sourceMappingURL=src/app/type/type.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHlwZS9zcmMvYXBwL3R5cGUvdHlwZS5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvdHlwZS90eXBlLmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQWU7QUNDakI7QURDQTtFQUNFLHVCQUFnQjtFQUNoQixtQkFBWTtBQ0NkO0FEQ0E7RUFDRSxpQkFBWTtBQ0NkO0FEUUE7RUFDRSxlQUFXO0VBQ1gsV0FBTTtBQ05SO0FBQ0EsMERBQTBEIiwiZmlsZSI6InNyYy9hcHAvdHlwZS90eXBlLmNvbXBvbmVudC5zdHlsIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QoKVxuICB0ZXh0LXRyYW5zZm9ybSBjYXBpdGFsaXplXG5cbi51bS1zZWN0aW9uXG4gIGp1c3RpZnktY29udGVudCBjZW50ZXJcbiAgYWxpZ24taXRlbXMgY2VudGVyXG5cbi51bS1zZWN0aW9uXG4gIHBhZGRpbmctdG9wIDhyZW1cblxuXG5cbi8vIGlbbnotaWNvbl0gXG4vLyAgIGZvbnQtc2l6ZSAzMnB4XG4vLyAgIGNvbG9yICM5OTlcbi8vICAgYWxpZ24taXRlbXMgY2VudGVyXG5cbi5hbnQtdXBsb2FkLXRleHQgXG4gIG1hcmdpbi10b3AgOHB4XG4gIGNvbG9yICM2NjZcblxuIiwiOmhvc3QoKSB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLnVtLXNlY3Rpb24ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi51bS1zZWN0aW9uIHtcbiAgcGFkZGluZy10b3A6IDhyZW07XG59XG4uYW50LXVwbG9hZC10ZXh0IHtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBjb2xvcjogIzY2Njtcbn1cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXNyYy9hcHAvdHlwZS90eXBlLmNvbXBvbmVudC5jc3MubWFwICovIl19 */"

/***/ }),

/***/ "./src/app/type/type.component.ts":
/*!****************************************!*\
  !*** ./src/app/type/type.component.ts ***!
  \****************************************/
/*! exports provided: TypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeComponent", function() { return TypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/session.service */ "./src/app/services/session.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _type_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./type.model */ "./src/app/type/type.model.ts");








var TypeComponent = /** @class */ (function () {
    function TypeComponent(apiService, sessionService, modalService, route, fb) {
        var _this = this;
        this.apiService = apiService;
        this.sessionService = sessionService;
        this.modalService = modalService;
        this.route = route;
        this.fb = fb;
        this.disable = false;
        this.previewImage = '';
        this.previewVisible = false;
        this.showUploadList = {
            showPreviewIcon: true,
            showRemoveIcon: true,
            hidePreviewIconInNonImage: true
        };
        this.handlePreview = function (file) {
            _this.previewImage = file.url || file.thumbUrl;
            _this.previewVisible = true;
        };
        this.validateForm = this.fb.group({
            colorupc: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            color: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            size: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
        });
    }
    TypeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clientId = this.route.snapshot.params.client_id;
        this.route.params.subscribe(function (data) {
            _this.eyeglassId = data.eyeglass_id;
        });
        this.modelName = this.route.snapshot.queryParams['model'];
        this.upc = this.route.snapshot.queryParams['upc'];
        console.log(this.route.snapshot.queryParams);
        this.getTypesList();
    };
    TypeComponent.prototype.onEditTypeModalOpen = function (type) {
    };
    TypeComponent.prototype.onDeleteTypeModalOpen = function (type, modal) {
        this.type = type;
        this.modalService.open(modal, { centered: true });
    };
    TypeComponent.prototype.onDownloadTypeImagesOpen = function () {
        console.log('download images');
    };
    TypeComponent.prototype.onDownloadTypeModelOpen = function () {
        console.log('download types');
    };
    TypeComponent.prototype.onAddTypeModalOpen = function (modal) {
        this.isTypeEdited = false;
        this.type = new _type_model__WEBPACK_IMPORTED_MODULE_7__["TypeModel"]();
        this.modalService.open(modal, { centered: true });
    };
    TypeComponent.prototype.onFormSubmit = function () {
        if (this.isTypeEdited) {
            this.EditType();
        }
        else {
            this.AddType();
        }
    };
    TypeComponent.prototype.getTypesList = function () {
        this.types = this.apiService.getTypes(this.clientId, this.eyeglassId);
    };
    TypeComponent.prototype.getType = function () {
        this.currentType = this.apiService.getType(this.clientId, this.eyeglassId, this.type.colorupc);
        return this.currentType;
    };
    TypeComponent.prototype.AddType = function () {
        var _this = this;
        this.type.client = this.clientId;
        this.type.eyeglass = this.eyeglassId;
        this.apiService.addType(this.type)
            .subscribe(function (type) {
            _this.getTypesList();
            _this.modalService.dismissAll();
        }, function (error) {
            console.error(error);
        });
    };
    TypeComponent.prototype.EditType = function () {
        var _this = this;
        this.apiService.updateType(this.clientId, this.eyeglassId, this.type.colorupc, this.type)
            .subscribe(function () {
            _this.showAlert('Type Edited successfully');
            _this.modalService.dismissAll();
        }, function (error) {
            console.error(error);
            _this.showAlert(error);
        });
    };
    TypeComponent.prototype.DeleteType = function () {
        var _this = this;
        this.apiService.deleteType(this.type)
            .subscribe(function (res) {
            _this.modalService.dismissAll();
            _this.showAlert('Type removed successfully');
            _this.types.splice(_this.types.indexOf(_this.type), 1);
        }, function (error) {
            console.error(error);
        });
    };
    TypeComponent.prototype.showAlert = function (message) {
        var _this = this;
        this.alertMessage = message;
        this.isAlertOpen = true;
        setTimeout(function () {
            _this.isAlertOpen = false;
        }, 5000);
    };
    // handelRemove = (file: UploadFile) => {
    //   console.log(file);
    //   return true;
    // }
    TypeComponent.prototype.onImagePicked = function (event) {
        var _this = this;
        var file = event.target.files[0];
        console.log(file);
        this.apiService.postImage("5d519c2eb174d281df9660b9", "5d519c4ab174d281df9660bb", "222222222222", file)
            .subscribe(function () {
            _this.modalService.dismissAll();
        }, function (error) {
            console.log(error);
        });
    };
    TypeComponent.prototype.upLoadChange = function (event, type) {
        var _this = this;
        console.log('event: ', event);
        var file = event ? event.file : null;
        var datas = file && file.uid ? file : file.response && file.response.rlt === 0 && file.response.datas;
        if (datas) {
            if (event.type === 'success') {
                type.eventType = 'add';
                this.apiService.updateType(type.client, type.eyeglass, type.colorupc, type)
                    .subscribe(function () {
                    console.log('type updated!');
                    _this.showAlert('image uploaded successfully');
                    _this.modalService.dismissAll();
                }, function (error) {
                    console.error(error);
                    _this.showAlert(error);
                });
                this.apiService.postImage(type.client, type.eyeglass, type.colorupc, datas)
                    .subscribe(function () {
                    console.log('image posted!');
                    _this.modalService.dismissAll();
                }, function (error) {
                    console.log(error);
                });
            }
            else if (event.type === 'removed') {
                event.file.eventType = 'remove';
                this.apiService.updateType(type.client, type.eyeglass, type.colorupc, event.file)
                    .subscribe(function () {
                    _this.showAlert('image deleted successfully');
                    _this.modalService.dismissAll();
                }, function (error) {
                    console.error(error);
                    _this.showAlert(error);
                });
            }
        }
    };
    TypeComponent.prototype.onChange = function (input) {
        if (input) {
            if (input.length === 2) {
                this.type.size = input + '-';
            }
            else if (input.length === 3 && input.substr(2, 1) !== '-') {
                var lastCharacter = input.substr(2, 1);
                var firstCharacters = input.substr(0, 2);
                this.type.size = firstCharacters + '-' + lastCharacter;
            }
            else if (input.length === 5) {
                this.type.size = input + '-';
            }
            else if (input.length === 6 && input.substr(5, 1) !== '-') {
                var lastCharacter = input.substr(5, 1);
                var firstCharacters = input.substr(0, 5);
                this.type.size = firstCharacters + '-' + lastCharacter;
            }
        }
    };
    TypeComponent.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"] },
        { type: _services_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
    ]; };
    TypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-type',
            template: __webpack_require__(/*! raw-loader!./type.component.html */ "./node_modules/raw-loader/index.js!./src/app/type/type.component.html"),
            styles: [__webpack_require__(/*! ./type.component.styl */ "./src/app/type/type.component.styl")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"],
            _services_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], TypeComponent);
    return TypeComponent;
}());



/***/ }),

/***/ "./src/app/type/type.model.ts":
/*!************************************!*\
  !*** ./src/app/type/type.model.ts ***!
  \************************************/
/*! exports provided: TypeModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeModel", function() { return TypeModel; });
var TypeModel = /** @class */ (function () {
    function TypeModel(type) {
        if (type) {
            this.id = type._id;
            this.colorupc = type.colorupc;
            this.color = type.color;
            this.size = type.size;
            this.client = type.client;
            this.eyeglass = type.eyeglass;
            this.images = type.images;
        }
    }
    TypeModel.ctorParameters = function () { return [
        null
    ]; };
    return TypeModel;
}());



/***/ }),

/***/ "./src/app/user/role.ts":
/*!******************************!*\
  !*** ./src/app/user/role.ts ***!
  \******************************/
/*! exports provided: Role */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
var Role;
(function (Role) {
    Role["User"] = "user";
    Role["Contact"] = "contact";
    Role["Admin"] = "admin";
})(Role || (Role = {}));


/***/ }),

/***/ "./src/app/user/user.model.ts":
/*!************************************!*\
  !*** ./src/app/user/user.model.ts ***!
  \************************************/
/*! exports provided: UserModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModel", function() { return UserModel; });
var UserModel = /** @class */ (function () {
    function UserModel(user) {
        if (user) {
            this.id = user._id;
            this.email = user.email;
            this.location = user.location;
            this.firstName = user.firstName;
            this.lastName = user.lastName;
            this.phone = user.phone;
            this.password = user.password;
            this.client = user.client;
            this.token = user.token;
            this.role = user.role;
        }
    }
    UserModel.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UserModel;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
// start angular in browser, pass our modual as input.
// tell angular to start with this module
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/luchen/Documents/coop/Angular-ClientManagement/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map