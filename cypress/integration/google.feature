Feature: The Google

  I want to search Valtech

  Scenario: Opening a social network page
    Given I open Google page
    Then I see 'Google' in the title
    And I put the 'Luiz Lohn' text in search
    And Search it
