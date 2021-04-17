import {Then} from '@cucumber/cucumber';
import {tables} from '../pages';

Then(/^I set values for below columns on Tables page$/, async (itemInfo) => {
    itemInfo = itemInfo.rowsHash();
    await tables.setTableName(itemInfo.Table);
    await tables.setPackageType(itemInfo.PackageType);
    await tables.setPriority(itemInfo.Priority);
});
