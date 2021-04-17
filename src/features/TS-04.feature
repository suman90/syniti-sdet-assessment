Feature: TS-04 - Addition of tables to a Target Source

  Background: Pre-conditions for this feature
    Given Collect application is open
    And Target named QETestDB1 exists
    And Target Source named RQ1 exists

  Scenario: TC-14 - Verify status of Target and Source columns and Active checkbox while adding a Table to a Target Source
    Given I open Tables page for target source RQ1
    When I select Add option on Tables page
    Then I try to edit Target and Source columns for unsaved Table record
    And Active option on table record should be toggled ON by default

  Scenario: TC-15 - Verify addition of a Table to a Target Source
    Given I open Tables page for target source RQ1
    And I select Add option on Tables page
    And I set values for below columns on Tables page
      | Table        | MARA     |
      | Package Type | CranPort |
      | Priority     | 10       |
    And I select save option on Tables page
    And empty table record with editable options should be shown
    When I select Cancel option on Tables page
    Then only newly added Table record should be shown in Tables page with below information
      | Refresh icon     | disabled |
      | Built column     | empty    |
      | Duration value   | 0        |
      | UOM value        | Seconds  |
      | Record Count     | 0        |
      | Completed column | empty    |

