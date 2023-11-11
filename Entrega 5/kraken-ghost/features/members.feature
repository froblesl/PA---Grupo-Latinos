Feature: Members

@user1 @web
Scenario: Como usuario quiero conocer la cantidad de Members suscritos
  Given I navigate to page "<URL_GHOST>"
  When I enter email "geraldinegomez070@gmail.com"
  And I wait for 2 seconds
  And I enter password "KrakenGht.373"
  And I wait for 2 seconds
  And I click next
  And I wait for 7 seconds
  And I see the dashboard metrics
  And I wait for 2 seconds
  Then The number of members is displayed as "1"

@user2 @web
Scenario: Como usuario quiero crear un nuevo Member
  Given I navigate to page "<URL_GHOST>"
  When I enter email "geraldinegomez070@gmail.com"
  And I wait for 2 seconds
  And I enter password "KrakenGht.373"
  And I wait for 2 seconds
  And I click next
  And I wait for 5 seconds
  And I click on Members
  And I wait for 5 seconds
  And I click on New member
  And I wait for 2 seconds
  And I enter member name "Prueba E2E"
  And I wait for 2 seconds
  And I enter member email "gsgm@gmail.com"
  And I wait for 2 seconds
  And I enter member label "kraken"
  And I wait for 2 seconds
  And I click add new member label
  And I wait for 2 seconds
  And I enter member note "Test kraken"
  And I wait for 2 seconds
  And I click save member
  And I click to return of Member list
  And I wait for 5 seconds
  Then The name of new member is displayed as "Prueba E2E"
  And The email of new member is displayed as "gsgm@gmail.com"
  And I send a signal to user 3 containing "new member creation complete"


@user3 @web
Scenario: Como usuario quiero eliminar un Member
  Given I navigate to page "<URL_GHOST>"
  When I enter email "geraldinegomez070@gmail.com"
  And I wait for 2 seconds
  And I enter password "KrakenGht.373"
  And I wait for 2 seconds
  And I click next
  And I wait for 20 seconds
  And I wait for 20 seconds
  And I wait for a signal containing "new member creation complete" for 20 seconds
  And I click on Members
  And I click on the first member of the list
  And I wait for 7 seconds
  And I click on Delete member option
  Then I click on confirm Delete member
  Then The name of new member is not displayed as "Prueba E2E"
