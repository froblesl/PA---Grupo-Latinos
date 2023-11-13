Feature: Members, Posts and Sites

@user1 @web
Scenario: Como usuario quiero crear un nuevo Member
  Given I navigate to page "<URL_GHOST_ADMIN>"
  When I enter email "<EMAIL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 5 seconds
  And I click on Members
  And I wait for 5 seconds
  And I click on New member
  And I wait for 2 seconds
  And I enter member name "$name_1"
  And I wait for 2 seconds
  And I enter member email "$email_1"
  And I wait for 2 seconds
  And I enter member label "$string_1"
  And I wait for 2 seconds
  And I click add new member label
  And I wait for 2 seconds
  And I enter member note "$string_2"
  And I wait for 2 seconds
  Then I click Save component
  And I wait for 5 seconds
  And I click to return of Member list

@user9 @web
Scenario: Como usuario quiero editar un Member
  Given I navigate to page "<URL_GHOST_ADMIN>"
  When I enter email "<EMAIL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 5 seconds
  And I click on Members
  And I wait for 5 seconds
  And I click on New member
  And I wait for 2 seconds
  And I enter member name "$name_2"
  And I wait for 2 seconds
  And I enter member email "$email_3"
  And I wait for 2 seconds
  And I enter member label "$string_2"
  And I wait for 2 seconds
  And I click add new member label
  And I wait for 2 seconds
  And I enter member note "$string_3"
  And I wait for 2 seconds
  And I click Save component
  And I wait for 5 seconds
  And I click to return of Member list
  And I wait for 5 seconds
  Then I click on Member exist
  And I wait for 5 seconds
  And I enter member name "$name_3"
  And I wait for 2 seconds
  And I enter member email "$email_4"
  And I wait for 2 seconds
  And I enter member label "$string_3"
  And I wait for 2 seconds
  And I click add new member label
  And I wait for 2 seconds
  And I enter member note "$string_4"
  And I wait for 2 seconds
  And I click Save component
  And I wait for 5 seconds
  And I click to return of Member list

@user2 @web
Scenario: Como usuario quiero eliminar un Member
  Given I navigate to page "<URL_GHOST_ADMIN>"
  When I enter email "<EMAIL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 5 seconds
  And I click on Members
  And I wait for 5 seconds
  And I click on New member
  And I wait for 2 seconds
  And I enter member name "$name_2"
  And I wait for 2 seconds
  And I enter member email "$email_2"
  And I wait for 2 seconds
  And I enter member label "$string_2"
  And I wait for 2 seconds
  And I click add new member label
  And I wait for 2 seconds
  And I enter member note "$string_2"
  And I wait for 2 seconds
  Then I click Save component
  And I wait for 5 seconds
  And I click to return of Member list
  And I wait for 5 seconds
  And I click on the first member of the list
  And I wait for 5 seconds
  And I click on Member actions
  And I wait for 5 seconds
  Then I click on Delete member option
  And I wait for 5 seconds
  And I confirm Delete component

@user8 @web
Scenario: Como usuario quiero conocer la cantidad de Members suscritos
  Given I navigate to page "<URL_GHOST_ADMIN>"
  When I enter email "<EMAIL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 7 seconds
  And I see the dashboard metrics
  And I wait for 2 seconds
  Then The number of members is displayed as "25"

@user3 @web
Scenario: Como usuario quiero crear un nuevo Post
  Given I navigate to page "<URL_GHOST_ADMIN>"
  When I enter email "<EMAIL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 5 seconds
  And I click on Posts
  And I wait for 5 seconds
  And I click on New post
  And I wait for 5 seconds
  And I enter Post title "$string_3"
  And I wait for 2 seconds
  And I click on Begin writing your post
  And I wait for 5 seconds
  And I enter content post "$string_4"
  And I wait for 2 seconds
  Then I click on Publish
  And I wait for 5 seconds
  And I click Continue, final review
  And I wait for 5 seconds
  And I click Publish component

@user4 @web
Scenario: Como usuario quiero editar un Post
  Given I navigate to page "<URL_GHOST_ADMIN>"
  When I enter email "<EMAIL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 5 seconds
  And I click on Posts
  And I wait for 5 seconds
  And I click on New post
  And I wait for 5 seconds
  And I enter Post title "$string_5"
  And I wait for 2 seconds
  And I click on Begin writing your post
  And I wait for 5 seconds
  And I enter content post "$string_6"
  And I wait for 2 seconds
  And I click on Publish
  And I wait for 5 seconds
  And I click Continue, final review
  And I wait for 5 seconds
  And I click Publish component
  And I wait for 5 seconds
  And I click Editor post
  And I wait for 5 seconds
  And I click to return of Post list
  And I wait for 5 seconds
  Then I click on Edit post
  And I wait for 5 seconds
  And I enter Post title "$string_7"
  And I wait for 2 seconds
  And I click on Begin writing your post
  And I wait for 5 seconds
  And I enter content post "$string_8"
  And I wait for 2 seconds
  And I click on Publish
  And I wait for 5 seconds
  And I click Continue, final review
  And I wait for 5 seconds
  And I click Publish component
  And I wait for 5 seconds

@user5 @web
Scenario: Como usuario quiero eliminar un Post
  Given I navigate to page "<URL_GHOST_ADMIN>"
  When I enter email "<EMAIL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 5 seconds
  And I click on Posts
  And I wait for 5 seconds
  And I click on New post
  And I wait for 5 seconds
  And I enter Post title "$string_8"
  And I wait for 2 seconds
  And I click on Begin writing your post
  And I wait for 5 seconds
  And I enter content post "$string_9"
  And I wait for 2 seconds
  And I click on Publish
  And I wait for 5 seconds
  And I click Continue, final review
  And I wait for 5 seconds
  And I click Publish component
  And I wait for 5 seconds
  And I click Editor post
  And I wait for 5 seconds
  And I click to return of Post list
  And I wait for 5 seconds
  And I click on Edit post
  And I wait for 5 seconds
  And I click Settings of post
  And I wait for 5 seconds
  Then I click Delete post
  And I wait for 5 seconds
  And I confirm Delete post

@user12 @web
Scenario: Como usuario quiero eliminar un Post antes de publicarse
  Given I navigate to page "<URL_GHOST_ADMIN>"
  When I enter email "<EMAIL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 5 seconds
  And I click on Posts
  And I wait for 5 seconds
  And I click on New post
  And I wait for 5 seconds
  And I enter Post title "$string_8"
  And I wait for 2 seconds
  And I click on Begin writing your post
  And I wait for 5 seconds
  And I enter content post "$string_9"
  And I wait for 2 seconds
  And I click Settings of post
  And I wait for 5 seconds
  Then I click Delete post
  And I wait for 5 seconds
  And I confirm Delete post

@user6 @web
Scenario: Como usuario quiero crear un borrador de Post
  Given I navigate to page "<URL_GHOST_ADMIN>"
  When I enter email "<EMAIL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 5 seconds
  And I click on Posts
  And I wait for 5 seconds
  And I click on New post
  And I wait for 5 seconds
  And I enter Post title "$string_10"
  And I wait for 2 seconds
  And I click on Begin writing your post
  And I wait for 5 seconds
  And I enter content post "$string_11"
  And I wait for 5 seconds
  Then I click to return of Post list

@user7 @web
Scenario: Como usuario quiero listar los Posts
  Given I navigate to page "<URL_GHOST_ADMIN>"
  When I enter email "<EMAIL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 5 seconds
  Then I click on Posts

@user10 @web
Scenario: Como usuario quiero ver los Posts publicados
  Given I navigate to page "<URL_GHOST_ADMIN>"
  When I enter email "<EMAIL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 5 seconds
  And I click on Posts
  And I wait for 5 seconds
  And I click Type component options
  And I wait for 5 seconds
  Then I click Published component
  And I wait for 5 seconds

@user13 @web
Scenario: Como usuario quiero programar un Post
  Given I navigate to page "<URL_GHOST_ADMIN>"
  When I enter email "<EMAIL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 5 seconds
  And I click on Posts
  And I wait for 5 seconds
  And I click on New post
  And I wait for 5 seconds
  And I enter Post title "$string_3"
  And I wait for 2 seconds
  And I click on Begin writing your post
  And I wait for 5 seconds
  And I enter content post "$string_4"
  And I wait for 2 seconds
  And I click on Publish
  And I wait for 5 seconds
  And I click Right now
  And I wait for 5 seconds
  Then I click Schedule for later
  And I wait for 5 seconds
  And I click Continue, final review
  And I wait for 5 seconds
  And I click Publish component

@user14 @web
Scenario: Como usuario quiero crear una Page
  Given I navigate to page "<URL_GHOST_ADMIN>"
  When I enter email "<EMAIL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 5 seconds
  And I click Pages
  And I wait for 5 seconds
  And I click New page
  Then I wait for 5 seconds
  And I enter Page title "$string_15"
  And I wait for 2 seconds
  And I click Begin writing your page
  And I wait for 5 seconds
  And I enter content page "$string_16"
  And I wait for 2 seconds
  And I click on Publish
  And I wait for 5 seconds
  And I wait for 5 seconds
  And I click Continue, final review
  And I wait for 5 seconds
  And I click Publish component
  And I wait for 5 seconds

@user15 @web
Scenario: Como usuario quiero despublicar una Page
  Given I navigate to page "<URL_GHOST_ADMIN>"
  When I enter email "<EMAIL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 5 seconds
  And I click Pages
  And I wait for 5 seconds
  And I click New page
  And I wait for 5 seconds
  And I enter Page title "$string_17"
  And I wait for 2 seconds
  And I click Begin writing your page
  And I wait for 5 seconds
  And I enter content page "$string_18"
  And I wait for 2 seconds
  And I click on Publish
  And I wait for 5 seconds
  And I wait for 5 seconds
  And I click Continue, final review
  And I wait for 5 seconds
  And I click Publish component
  And I click to return of Page list
  And I wait for 5 seconds
  And I click Pages
  And I wait for 5 seconds
  And I click Type component options
  And I wait for 5 seconds
  And I click Published component
  And I wait for 5 seconds
  And I click on last element Published
  And I wait for 5 seconds
  Then I click Unpublish
  And I wait for 5 seconds
  And I click Unpublish and revert to private draft

@user16 @web
Scenario: Como usuario quiero crear un nuevo Tag
  Given I navigate to page "<URL_GHOST_ADMIN>"
  When I enter email "<EMAIL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 5 seconds
  And I click Tags
  And I wait for 5 seconds
  And I click New tag
  And I wait for 5 seconds
  Then I enter tag name "$string_19"
  And I wait for 2 seconds
  And I enter tag slug "$string_20"
  And I wait for 2 seconds
  And I enter tag description "$string_21"
  And I wait for 2 seconds
  And I click Save component
  And I wait for 5 seconds
  And I click to return of Tag list

@user17 @web
Scenario: Como usuario quiero usar un Tag creado previamente en nuevo Post
  Given I navigate to page "<URL_GHOST_ADMIN>"
  When I enter email "<EMAIL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 5 seconds
  And I click Tags
  And I wait for 5 seconds
  And I click New tag
  And I wait for 5 seconds
  And I enter tag name "$string_22"
  And I wait for 2 seconds
  And I enter tag slug "$string_23"
  And I wait for 2 seconds
  And I enter tag description "$string_24"
  And I wait for 2 seconds
  And I click Save component
  And I wait for 5 seconds
  And I click to return of Tag list
  And I wait for 5 seconds
  And I click on Posts
  And I wait for 5 seconds
  And I click on New post
  And I wait for 5 seconds
  And I enter Post title "$string_25"
  And I wait for 2 seconds
  And I click on Begin writing your post
  And I wait for 5 seconds
  And I enter content post "$string_26"
  And I wait for 2 seconds
  And I click Settings of post
  And I wait for 5 seconds
  Then I enter tag post "$string_27"
  And I wait for 2 seconds
  And I click add tag post
  And I wait for 5 seconds
  And I click on Publish
  And I wait for 5 seconds
  And I click Continue, final review
  And I wait for 5 seconds
  And I click Publish component

@user18 @web
Scenario: Como usuario quiero eliminar un Tag
  Given I navigate to page "<URL_GHOST_ADMIN>"
  When I enter email "<EMAIL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 5 seconds
  And I click Tags
  And I wait for 5 seconds
  And I click New tag
  And I wait for 5 seconds
  And I enter tag name "$string_28"
  And I wait for 2 seconds
  And I enter tag slug "$string_29"
  And I wait for 2 seconds
  And I enter tag description "$string_30"
  And I wait for 2 seconds
  And I click Save component
  And I wait for 5 seconds
  And I click to return of Tag list
  And I wait for 5 seconds
  And I click on the first tag of the list
  And I wait for 5 seconds
  Then I click Delete tag
  And I wait for 5 seconds
  And I confirm Delete component

@user19 @web
Scenario: Como usuario quiero buscar el contenido de un Member
  Given I navigate to page "<URL_GHOST_ADMIN>"
  When I enter email "<EMAIL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 5 seconds
  And I click on Members
  And I wait for 5 seconds
  And I click on New member
  And I wait for 2 seconds
  And I enter member name "$name_19"
  And I wait for 2 seconds
  And I enter member email "$email_19"
  And I wait for 2 seconds
  And I enter member label "$string_19"
  And I wait for 2 seconds
  And I click add new member label
  And I wait for 2 seconds
  And I enter member note "$string_31"
  And I wait for 2 seconds
  And I click Save component
  And I wait for 5 seconds
  And I click to return of Member list
  And I navigate to page "<URL_GHOST>"
  And I wait for 5 seconds
  Then I click search Member

@user20 @web
Scenario: Como usuario quiero agregar un nuevo Site
  Given I navigate to page "<URL_GHOST_ADMIN>"
  When I enter email "<EMAIL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 5 seconds
  And I click on Explore
  And I wait for 5 seconds