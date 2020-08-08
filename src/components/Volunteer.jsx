import React, { Component } from 'react'

function getTerm() {
    const date = new Date();
    const month = date.getMonth();
    if ((0 <= month) && (month < 4)) {
        return "Winter " + date.getFullYear()
    } else if ((4 <= month) && (month < 8)) {
        return "Spring " + date.getFullYear()
    } else {
        return "Fall " + date.getFullYear()
    }
}

class Volunteer extends Component {
    constructor() {
        super()

        this.state = {
            isLoading: true,
            people: [],

        }
    }

    componentDidMount() {

        //Publish the Google Spreadsheet to Web.
        //You can find this id in the url when you share it.
        //It is between the ../spreadsheets/d/ + id + /edit?...
        //https://docs.google.com/a/mvla.net/spreadsheets/d/1Hke5wPTdUFQ1R2GZod_Th7i1yY4_im2uwpuPf44gzQ0/edit?usp=sharing

        var sheedID = '1FSIqfoaHbOmNlqJxZWnhdFp-xQa_-FRpUUFXUA3Ux4s';
        var url = 'https://spreadsheets.google.com/feeds/list/' + sheedID + '/od6/public/values?alt=json';

        //Use fetch to get the spreadsheet data
        fetch(url)
            .then(response => response.json())
            .then(jsonData => {
                var name = [];
                var title = [];
                var linkedin = [];

                //add the jsonData to the arrays of animals and cities
                if (jsonData != null) {
                    console.log(jsonData)
                    for (let i = 0; i < jsonData.feed.entry.length; i++) {
                        //go through each row at a time
                        //You will need to know the name of the column

                        //Add data for animals column if it is not blank
                        //note! make sure to have the title be all lowered case gsx$animals
                        if (jsonData.feed.entry[i]['gsx$title']['$t'] !== '') {
                            title.push(jsonData.feed.entry[i]['gsx$title']['$t']);
                        }

                        //Add data for cities column if it is not blank
                        if (jsonData.feed.entry[i]['gsx$name']['$t'] !== '') {
                            name.push(jsonData.feed.entry[i]['gsx$name']['$t']);
                        }

                        if (jsonData.feed.entry[i]['gsx$linkedin']['$t'] !== '') {
                            linkedin.push(jsonData.feed.entry[i]['gsx$linkedin']['$t']);
                        }
                    }
                }

                name.map((e, index) => {
                    this.state.people.push(
                        {
                            name: name[index],
                            title: title[index],
                            linkedin: linkedin[index]
                        }
                    )
                    return this.state.people;
                });



                this.setState({ isLoading: false })

            });

        console.log(this.state.people)

    }

    render() {
        return (
            <section className="page-section bg-light" id="volunteering">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Exec for {getTerm()}</h2>
                        <h3 className="section-subheading text-muted">Meet our wonderful team for this term</h3>
                    </div>
                    <div className="row">
                        {this.state.people && this.state.people.map(({ name, title, linkedin }, index) =>
                            <div className="col-lg-2">
                                <div className="team-member">
                                    <p className="date" style={{ paddingTop: '5px' }}>{title}</p>
                                    <h4 style={{ marginTop: '-50px' }}>{name}</h4>
                                    <a className="text-muted" href={linkedin}>LinkedIn</a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        )
    }

}





export default Volunteer