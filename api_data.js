define({ "api": [
  {
    "type": "get",
    "url": "/api/m/appointment?fname=John&lname=\"Doe\"&dob=\"05/13/1965\"",
    "title": "",
    "name": "GetAppointmentConfirm",
    "group": "Appointment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fname",
            "description": "<p>Firstname of the User.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lname",
            "description": "<p>Lastname of the User.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fname",
            "description": "<p>Firstname of the User.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/appointment/index.js",
    "groupTitle": "Appointment"
  }
] });