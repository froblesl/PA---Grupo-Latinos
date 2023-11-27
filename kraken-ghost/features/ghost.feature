Feature: Members, Posts and Sites

@user32 @web
Scenario Outline: Como usuario quiero programar un Post
  Given I navigate to page "<URL_GHOST_ADMIN>"
  When I enter email "<EMAIL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds 
  And I click next
  And I wait for 3 seconds
  And I click on Posts
  And I wait for 3 seconds
  And I click on New post
  And I wait for 3 seconds
  And I enter Post title "$string_3"
  And I wait for 2 seconds
  And I click on Begin writing your post
  And I wait for 3 seconds
  And I enter content post "$string_4"
  And I wait for 2 seconds
  And I click on Publish "<VERSION>" "yes"
  And I wait for 5 seconds
  And I click Right now "<VERSION>"
  And I wait for 3 seconds
  And I click Schedule for later "<VERSION>"
  And I wait for 3 seconds
  And I enter the date and time to Schedule for later "<date>" "<time>"
  And I wait for 3 seconds
  And I click Continue, final review "<VERSION>"
  And I wait for 3 seconds
  Then I click Publish component "<VERSION>" "yes"
Examples:
  | date | time |
 # | 2023-12-12 | 12:00 |
 # | 2021-10-10 | 14:00 |
 # | 2023-13-26 | 12:00 |
 # | 2023-11-32 | 20:29 |
 # | 20211126 | 13:00 |
 # | 23-12-2024 | 15:00 |
 # | 20211126-20211126-20211126  | 16:00 |
 # | 2090-07-23 | 17:00 |
 # | 2024-07-24 | -20:00 |
  | 2024-10-24 | 20:-00 |
 # | 2024-07-25 | 20.5:00 |
 # | 2024-07-26 | 20:0529 |
 # | 2024-07-30 | 2045:29 |
 # | default | nothing |
 # | select password from user | select * from user |
