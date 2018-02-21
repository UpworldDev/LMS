import React, { Component } from 'react';
import Administration from 'views/Administration.jsx';

class Classes extends Administration{
    constructor(props) {
    	super(props);
    	this.state.entityName='Class';
    	this.state.apiRoute='classes';
	    this.state.tableDisplayProps=[
		    {
			    propName: 'courseId',
			    displayName: 'Subject',
			    inputType: 'dropdown',
			    source: 'courses'
		    },
		    {
			    propName: 'termId',
			    displayName: 'Term',
			    inputType: 'dropdown',
			    source: 'terms'
		    }//,
		    // {
			 //    propName: 'teacherId',
			 //    displayName: 'Teacher',
			 //    inputType: 'dropdown',
			 //    source: '/teachers'
		    // }
	    ];
    }
}

export default Classes;
