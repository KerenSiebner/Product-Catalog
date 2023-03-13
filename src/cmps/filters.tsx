// import { Form, Formik, FormikHelpers, useFormik } from 'formik';
import { Key, useEffect, useState } from 'react';
import { storeService } from '../services/store-service';
// import { FilterValues } from '../models/filter-values';

export function Filters({ updateFilter, stores }: any) {
    const [storeFilter, setStoreFilter] = useState(storeService.getDefaultStoreFilter())
    console.log('storeFilter', storeFilter)

    useEffect(() => {
        updateFilter(storeFilter)
    }, [storeFilter])


    function handleChange(ev: React.FormEvent<HTMLInputElement>) {
        const { name, value } = ev.currentTarget
        setStoreFilter((prevStoreFilter) => ({ ...prevStoreFilter, [name]: value }))
    }

    return <div className='filters-container'>
        <form action="">
            <select name="Budget" className="budget-select">
                <option value="">Budget</option>
                <option value="25minus">Up to $25</option>
                <option value="25to50">$25 - $50</option>
                <option value="50to75">$50 - $75</option>
                <option value="75to100">$75 - $100</option>
                <option value="100plus">$100+</option>
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
                <option value="Him">Him</option>
                <option value="Her">Her</option>
                <option value="">Both</option>
            </select>
            <select name="Store" className="store-select">
                <option value="">Select Store</option>
                {stores?.map((store: any, idx: Key) => (
                    <option key={idx} value={store.StoreName}
                    style={{backgroundImage: `url(${store.RegularStoreLogo})`}}
                    >
                        {/* <img src={store.RegularStoreLogo} alt="store-logo" /> */}
                        {store.StoreName}</option>
                ))}
            </select>
            <input type="text"
                name="Search"
                placeholder='Search a Store'
                value={storeFilter.Search}
                onChange={handleChange} />
        </form>
    </div>
}
// import { Form, Formik, FormikHelpers, useFormik } from 'formik';
// import { FilterValues } from '../models/filter-values';

// export function Filters() {
//     const formik = useFormik({
//         initialValues: {
//             Budget: 'All',
//             Age: 'All',
//             Gender: 'Both',
//             Store: 'All Gifts',
//             Search: ''
//         }, onSubmit: values => alert(JSON.stringify(values, null, 2))
//     })

// return <div className='filters-container'>
//     <Formik
//         initialValues={{
//             Budget: 'All',
//             Age: 'All',
//             Gender: 'Both',
//             Store: 'All Gifts',
//             Search: ''
//         }}
//         onSubmit={(
//             values: FilterValues,
//             { setSubmitting }: FormikHelpers<FilterValues>
//         ) => {
//             setTimeout(() => {
//                 alert(JSON.stringify(values, null, 2));
//                 setSubmitting(false);
//             }, 500);
//         }}
//     >
//         <Form>
//             <select name="Budget" className="budget-select">
//                 <option value="">Budget</option>
//                 <option value="">Up to $25</option>
//                 <option value="">$25 - $50</option>
//                 <option value="">$50 - $75</option>
//                 <option value="">$75 - $100</option>
//                 <option value="">$100+</option>
//                 <option value="">All</option>
//             </select>
//             <select name="Age" className="age-select">
//                 <option value="">Age</option>
//                 <option value="Baby & Toddler">Baby & Toddler</option>
//                 <option value="Kid: Age 3-5">Kid: Age 3-5</option>
//                 <option value="Kid: Age 6-9">Kid: Age 6-9</option>
//                 <option value="Kid: Age 10-12">Kid: Age 10-12</option>
//                 <option value="Teen">Teen</option>
//                 <option value="Adult">Adult</option>
//                 <option value="">All</option>
//             </select>
//             <select name="Gender" className="gender-select">
//                 <option value="">Gender</option>
//                 <option value="">Him</option>
//                 <option value="">Her</option>
//                 <option value="">Both</option>
//             </select>
//             <select name="Store" className="Store-select">
//                 <option value="">Select Store</option>
//                 <option value="">Him</option>
//                 <option value="">Her</option>
//                 <option value="">Both</option>
//             </select>
//             <input type="text" placeholder='Search a Store' />
//         </Form>
//     </Formik>
// </div>
// }