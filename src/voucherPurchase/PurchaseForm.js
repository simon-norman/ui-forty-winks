import React, { Component } from 'react';
import VoucherOption from './VoucherOption';
import loadExternalScript from '../helpers/loadExternalScript';

class PurchaseForm extends Component {
  constructor(props) {
    super(props)
    this.state = { voucherOptions: [
      { price: 5, sku: 'sku_Eul0QEAUYQniqw' },
      { price: 10, sku: 'sku_Eul0tfvCOYfGpF' },
      { price: 20, sku: 'sku_EtzFqxkV4F82q3' },
      { price: 30, sku: 'sku_Eul0TdI1c3aak2' }
    ]}
    loadExternalScript('https://js.stripe.com/v3', this.createStripe)
  }

  createStripe = () => {
    this.setState({ stripe: window.Stripe('pk_test_wOHb0w02Yjdjkij8NCAVAAU400Zmwk3pSa') })
  }

  buyVoucher = (sku) => {
    this.state.stripe.redirectToCheckout({
      items: [{sku: sku, quantity: 1}],
      successUrl: 'http://localhost:3000/thank-you',
      cancelUrl: 'https://TOBEADDED.COM',
    })
    .then(function (result) {
      if (result.error) {
        console.log(result.error)
      }
    });
  }

  render() {
    return (
      <div>
        { 
          this.state.voucherOptions.map((voucherOption, i) => {
            return <VoucherOption key={i} voucherOption={voucherOption} buyVoucher={this.buyVoucher}/>
          })
        }
    </div>
    )
  }
}

export default PurchaseForm;
