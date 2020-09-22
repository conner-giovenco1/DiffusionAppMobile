import React from 'react';

import {
    AppForm,
    AppFormField,
    AppFormPicker,
    SubmitButton
} from '../../shared/forms';
import CategoryPickerItem from '../../shared/CategoryPickerItem';
import Screen from '../../shared/Screen';
import validationSchema from './validationSchema';
import Values from './model';
import categories from './constants';
import styles from './styles';

export default function ListingEdit() {
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{
                    title: '',
                    price: '',
                    category: null,
                    description: ''
                }}
                onSubmit={(values: Values) => console.log(values)}
                validationSchema={validationSchema}>
                <AppFormField
                    maxLength={255}
                    name="title"
                    placeholder="Title"
                />
                <AppFormField
                    keyboardType="numeric"
                    maxLength={8} // includes 10000.99
                    name="price"
                    placeholder="Price"
                />
                <AppFormPicker
                    items={categories}
                    PickerItemComponent={CategoryPickerItem}
                    name="category"
                    placeholder="Category"
                />
                <AppFormField
                    maxLength={255}
                    multiline
                    name="description"
                    numberOfLines={3} // only works on android
                    placeholder="Description"
                />
                <SubmitButton title="Post" />
            </AppForm>
        </Screen>
    );
}
