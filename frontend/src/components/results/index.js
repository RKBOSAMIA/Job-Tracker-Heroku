import React from 'react';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export default class JobLists extends React.Component{
    constructor(props){
        super(props);
        this.state = { companies: [] };
    }
    componentDidMount(){
        axios.post('/results',null,{params:{company_name:this.props.location.state.source}})
              .then(res=>{
                this.setState({ companies : res.data }); 
    })
}
    render(){
        return(
            <div style={{marginTop:30}}>
                <Typography variant="body3" component="h2">Job Source: {this.props.location.state.source}</Typography>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell style={{fontWeight:'bold'}}>ID</TableCell>
                                <TableCell style={{fontWeight:'bold'}} align="left">Company Name</TableCell>
                                <TableCell style={{fontWeight:'bold'}} align="left">Job Title</TableCell>
                                <TableCell style={{fontWeight:'bold'}} align="left">Job URL</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {this.state.companies.map((row) => (
                            <TableRow key={row.id}>
                            <TableCell align="left">{row.id}</TableCell>
                            <TableCell align="left">{row.company_name}</TableCell>
                            <TableCell align="left">{row.job_title}</TableCell>
                            <TableCell align="left"><a href={row.job_url}>{row.job_url}</a></TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
    }
}