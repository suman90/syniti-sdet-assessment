import {$, $$, ElementArrayFinder, ElementFinder} from 'protractor';

class TablesPage {
    private tableNameField: ElementFinder;
    private packageTypeDropdown: ElementFinder;
    private packageTypeOptions: ElementArrayFinder;
    private priorityField: ElementFinder;

    constructor() {
        // added dummy locators just to stop seeing errors in my IDE
        this.tableNameField = $('.tableNameField');
        this.packageTypeDropdown = $('.packageTypeDropDown');
        this.packageTypeOptions = $$('.packageTypeOption');
        this.priorityField = $('.priorityField');
    }

    public async setTableName(tableName) {
        await this.tableNameField.sendKeys(tableName);
    }

    public async setPackageType(packageType) {
        await this.packageTypeDropdown.click()
        await this.packageTypeOptions.filter(async option => {
            return packageType === await option.getText();
        }).get(0).click();
    }

    public async setPriority(priorityValue) {
        await this.priorityField.sendKeys(priorityValue);
    }

}

export const tables = new TablesPage();
