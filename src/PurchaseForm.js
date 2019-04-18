import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import loadExternalScript from './helpers/loadExternalScript';

class PurchaseForm extends Component {
  constructor(props) {
    super(props)
    loadExternalScript('https://js.stripe.com/v3', this.createStripe)
  }

  createStripe = () => {
    this.setState({ stripe: window.Stripe('pk_test_wOHb0w02Yjdjkij8NCAVAAU400Zmwk3pSa') })
  }

  buyVoucher = () => {
    this.state.stripe.redirectToCheckout({
      items: [{sku: 'sku_EtzFqxkV4F82q3', quantity: 1}],
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
        <Button onClick={this.buyVoucher} className="buy-voucher" variant="contained" color="primary">
            Buy a voucher
        </Button>
      </div>
    )
  }
}

export default PurchaseForm;
