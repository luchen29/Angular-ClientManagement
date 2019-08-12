import { Component, OnInit } from '@angular/core';
import { UserModel } from '../user/user.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { APIService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { BillingModel } from './billing.model';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.styl']
})

export class ContactsComponent implements OnInit {
  public validateForm: FormGroup;
  public billingValidateForm: FormGroup;
  protected contact: UserModel;
  protected contactList: UserModel[];
  protected billing: BillingModel;
  protected billingList: BillingModel[];
  protected formFieldEmailConfirmation: string;
  protected alertMessage: string;
  protected isAlertOpen: boolean;
  private clientId: string;
  private isContactEdited: boolean;
  private isBillingEdited: boolean;
  private btnAct: boolean;

  constructor(
    private apiService: APIService, 
    private modalService: NgbModal, 
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private billingFb: FormBuilder,
    ) {
      this.validateForm = this.fb.group({
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        email: ['', [Validators.email, Validators.required]],
        emailConfirmation: ['', [Validators.email, this.confirmValidator]],
        phone: ['', [Validators.required]],
        phoneNumberPrefix: ['+1'],
        location: ['', [Validators.required]],
      });
      this.billingValidateForm = this.billingFb.group({
        billingType: ['', [Validators.required]],
        firstNameRec: ['', [Validators.required]],
        lastNameRec: ['', [Validators.required]],
        emailRec: ['', [Validators.email, Validators.required]],
        emailConfirmationRec: ['', [Validators.email, this.billingRecConfirmValidator]],
        phoneRec: ['', [Validators.required]],
        phoneNumberPrefixRec: ['+1'],
        firstNamePay: ['', [Validators.required]],
        lastNamePay: ['', [Validators.required]],
        emailPay: ['', [Validators.email, Validators.required]],
        emailConfirmationPay: ['', [Validators.email, this.billingPayConfirmValidator]],
        phonePay: ['', [Validators.required]],
        phoneNumberPrefixPay: ['+1'],
      })
    }

  ngOnInit() {
    this.clientId = this.route.snapshot.params.client_id;
    this.getContacts();
    this.getBillings()
  }

  getContacts() {
    this.contactList = this.apiService.getContacts(this.clientId);
  }

  getBillings() {
    this.billingList = this.apiService.getBillings(this.clientId);
  }

  onEditContactModalOpen(modal, contact) {
    this.contact = contact;
    this.isContactEdited = true;
    this.modalService.open(modal, {centered: true});
  }

  onEditBillingModalOpen(model, billing) {
    this.billing = billing;
    this.isBillingEdited = true;
    this.modalService.open(model, {centered: true});
  }

  onDeleteContactModalOpen(modal, contact) {
    this.contact = contact;
    this.modalService.open(modal, {centered: true});
  }

  onDeleteBillingModalOpen(model, billing) {
    this.billing = billing;
    this.modalService.open(model, {centered: true});
  }

  onAddContactModalOpen(modal) {
    this.isContactEdited = false;
    this.contact = new UserModel();
    this.modalService.open(modal, {centered: true});
  }

  onAddBillingModalOpen(modal) {
    this.isBillingEdited = false;
    this.billing = new BillingModel();
    this.modalService.open(modal, {centered: true});
  }

  onFormSubmit() {
    if (this.isContactEdited) {
      this.editContact();
    } else {
      this.addContact();
    }
  }

  onBillingFormSubmit() {
    if (this.isBillingEdited) {
      this.editBilling();
    } else {
      this.addBilling();
    }
  }

  editContact() {
    this.apiService.updateContact(this.contact).subscribe(
      () => {
        this.modalService.dismissAll();
        this.getContacts();
        this.showAlert('Contact updated successfully!');
      }, error => {
        console.error(error);
        this.showAlert(error);
      }
    );
  }

  editBilling() {
    this.apiService.updateBilling(this.billing).subscribe(
      () => {
        this.modalService.dismissAll();
        this.getBillings();
        this.showAlert('Billing information updated successfully!');
      }, error => {
        this.showAlert(error);
      }
    );
  }

  deleteContact() {
    this.modalService.dismissAll();
    this.apiService.deleteContact(this.contact.id)
    .subscribe(
      () => {
        this.getContacts();
        this.showAlert(this.contact.firstName + ' ' + this.contact.lastName + ' contact deleted.');
      }, error => {
        this.showAlert(error);
      }
    );
  }

  deleteBilling() {
    this.modalService.dismissAll();
    this.apiService.deleteBilling(this.billing)
    .subscribe(
      () => {
        this.getBillings();
        this.showAlert('Billing information deleted, please add again.');
      }, error => {
        this.showAlert(error);
      }
    );
  }


  addContact() {
    this.contact.client = this.clientId;
    this.apiService.addContact(this.contact)
    .subscribe(
      (data) => {
        this.modalService.dismissAll();
        this.showAlert('Contact added successfully');
        this.getContacts();
      }, error => {
        console.error(error);
      }
    );
  }

  addBilling() {
    this.billing.client = this.clientId;
    this.apiService.addBilling(this.billing)
    .subscribe(
      (data) => {
        this.modalService.dismissAll();
        this.showAlert('Contact added successfully');
        this.getBillings();
      }, error => {
        console.error(error);
      }
    );
  }

  confirmValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true};
    } else if (control.value !== this.validateForm.controls.email.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  billingPayConfirmValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true};
    } else if (control.value !== this.billingValidateForm.controls.emailPay.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  billingRecConfirmValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true};
    } else if (control.value !== this.billingValidateForm.controls.emailRec.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  showAlert(message) {
    this.alertMessage = message;
    this.isAlertOpen = true;
    setTimeout(() => {
      this.isAlertOpen = false;
    }, 5000);
  }
}
