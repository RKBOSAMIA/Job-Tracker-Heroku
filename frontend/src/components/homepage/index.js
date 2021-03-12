import React from 'react';
import axios from 'axios'
import { Grid } from '@material-ui/core';
import SourceList from '../sourcelist';

class HomePage extends React.Component {
  state = { companies: [] };
    componentDidMount(){
        let url = '/home';
        axios.get(url)
                    .then(res=>{
                        const companies = res.data;
                        //console.log(companies)
                        this.setState({ companies });
                    })
    }
    render(){
      return (
        <div style={{marginLeft:50}}>
          <h2>Sources-Click a card to explore jobs</h2>
          <Grid container>
            {
              this.state.companies.map(company =>
              <Grid item xs={12} sm={6} md={4}>
              <SourceList
                name = {company.name}
                image_url = {company.logo_file}
                description = {company.description}
                rating = {company.rating}
                /></Grid>)
            }
          </Grid>
        </div>
      );
  }
} 
export default HomePage;
