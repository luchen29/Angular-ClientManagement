
export class BillingModel {
  id: string;
  client: string;
  billingType: string;
  firstNameRec: string;
  lastNameRec: string;
  emailRec: string;
  phoneRec: string;
  firstNamePay: string;
  lastNamePay: string;
  emailPay: string;
  phonePay: string;

  constructor(billing?: any) {
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
}
