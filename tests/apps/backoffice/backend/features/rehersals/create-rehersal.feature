Feature: Create a new rehersal
    In order to have rehersals on the platform
    As a user with admin rights
    I want to create a new rehersal
    
    Scenario: A valid non existing course
        Given I send a PUT request to "/rehersals/670b9562-b30d-52d5-b827-655787665500" with body:
        """
        {
            "daytime": "1641931340",
            "duration": "2 hours"
        }
        """
        Then the response status code should be 201
        And the response should be empty