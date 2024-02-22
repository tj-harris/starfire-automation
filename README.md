## Starfire entry automation

# Cypress
To run the cypress script you must first create a cypress.env.json file in the project root. Here is an example:
```
{
  "username": "YOUR_USERNAME",
  "password": "YOUR_PASSWORD"
}
```
You will then need to populate the entries.json file with the data you would like to enter into Starfire.
You will need to find the project id for your project. These can be found by inspecting the values of the dropdown when adding an entry to Starfire.
example: 
```
[
  { "date": "02-23-2024", "start": "09:00", "end": "17:00", "projectId": "232", "taskTypeId": "4", "description": "Description goes here" },
  { "date": "02-26-2024", "start": "09:00", "end": "17:00", "projectId": "232", "taskTypeId": "4", "description": "Description goes here" },
  { "date": "02-27-2024", "start": "09:00", "end": "17:00", "projectId": "232", "taskTypeId": "4", "description": "Description goes here" },
  { "date": "02-28-2024", "start": "09:00", "end": "17:00", "projectId": "232", "taskTypeId": "4", "description": "Description goes here" },
  { "date": "02-29-2024", "start": "09:00", "end": "17:00", "projectId": "232", "taskTypeId": "4", "description": "Description goes here" }
]
```