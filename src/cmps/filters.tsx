import { Form, Formik, FormikHelpers } from 'formik';
import { FilterValues } from '../models/filter-values';

export function Filters() {
    return <div className='filters-container'>
        <Formik
            initialValues={{
                Budget: 'All',
                Age: 'All',
                Gender: 'Both',
                Store: 'All Gifts',
                Search: ''
            }}
            onSubmit={(
                values: FilterValues,
                { setSubmitting }: FormikHelpers<FilterValues>
            ) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 500);
            }}
        >
            <Form>
            <select name="Budget" className="budget-select">
                <option value="">Budget</option>
                <option value="">Up to $25</option>
                <option value="">$25 - $50</option>
                <option value="">$50 - $75</option>
                <option value="">$75 - $100</option>
                <option value="">$100+</option>
                <option value="">All</option>
            </select>
            <select name="Age" className="age-select">
                <option value="">Age</option>
                <option value="Baby & Toddler">Baby & Toddler</option>
                <option value="Kid: Age 3-5">Kid: Age 3-5</option>
                <option value="Kid: Age 6-9">Kid: Age 6-9</option>
                <option value="Kid: Age 10-12">Kid: Age 10-12</option>
                <option value="Teen">Teen</option>
                <option value="Adult">Adult</option>
                <option value="">All</option>
            </select>
            <select name="Gender" className="gender-select">
                <option value="">Gender</option>
                <option value="">Him</option>
                <option value="">Her</option>
                <option value="">Both</option>
            </select>
            <select name="Store" className="Store-select">
                <option value="">Select Store</option>
                <option value="">Him</option>
                <option value="">Her</option>
                <option value="">Both</option>
            </select>
            <input type="text" placeholder='Search a Store'/>
            </Form>
        </Formik>
    </div>
}