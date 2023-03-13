import { IoIosArrowBack } from 'react-icons/io'
import { storeService } from '../services/store-service';
import { GiftCardPreview } from "./gift-card-preview";
import {
    Formik,
    FormikHelpers,
    FormikProps,
    Form,
    Field,
    FieldProps,
} from 'formik';
import { Link, useParams } from "react-router-dom";
import { isButtonElement } from 'react-router-dom/dist/dom';

interface MyFormValues {
    senderFullName: string,
    senderEmail: string,
    personalMsg?: string,
    recipeintFullName: string,
    recipeintEmail: string,
}


// export function GiftDetails({selectedStore}:Store, {backToStoreList}:any){
// export function GiftDetails({ selectedStore }: Store) {
export function GiftDetails() {
    const { storeId }: any = useParams()
    console.log(' type of storeId', +storeId)
    const selectedStore = storeService.getStoreById(+storeId)
    console.log('selectedStore', selectedStore)

    const logoUrl = selectedStore?.RegularStoreLogo
    const initialValues: MyFormValues = { senderFullName: '', senderEmail: '', personalMsg: '', recipeintFullName: '', recipeintEmail: '' };

    function getGiftAmounts() {
        let giftAmounts = selectedStore?.Products?.map((product => { return Math.round(product.Price) }))
        let uniqueGiftAmounts = giftAmounts?.filter((giftAmount, idx) => { return giftAmounts?.indexOf(giftAmount) === idx })
        return uniqueGiftAmounts?.map((giftAmount, idx) => { return <button key={idx} className="gift-amount-btn">{giftAmount}</button> })
    }

    return <div className="gift-details-container">
        <div className="select-gift-card-container">
            <div className='select-gift-card-header'>
                <Link to='/'><IoIosArrowBack className='back-btn' /></Link>
                <img className="store-logo" src={logoUrl} alt="" />
                <span>{selectedStore?.StoreName} eGift Card</span>
            </div>
            <GiftCardPreview store={selectedStore!} />
            <h5>{selectedStore?.StoreText}</h5>
            <h4>Select gift card amount</h4>
            {getGiftAmounts()}
            {/* <a href="">Gift card details</a> */}
        </div>
        <div className="recepient-form-container">
            <Formik
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                    console.log({ values, actions });
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }}
            >
                <Form>
                    <label htmlFor="senderFullName">Who is it from?</label>
                    <span>
                        <Field id="senderFullName" name="senderFullName" placeholder="Your Name" />
                        <Field id="senderEmail" name="senderEmail" placeholder="Your Email" />
                    </span>

                    <label htmlFor="fullName">Presonal message</label>
                    <Field as="textarea" id="personalMsg" name="personalMsg" placeholder="Add a personal message (optional)" />

                    <label htmlFor="recipeintFullName">Who is it for?</label>
                    <span>
                        <Field id="recipeintFullName" name="recipeintFullName" placeholder="Their Name" />
                        <Field id="recipeintEmail" name="recipeintEmail" placeholder="Their Email or Cell Phone" />
                    </span>
                    <span></span>
                    <button type="submit" className="submit-btn">Continue</button>
                </Form>
            </Formik>

        </div>
    </div>
}