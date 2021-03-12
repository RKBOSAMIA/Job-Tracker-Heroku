import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom';


const root = {
  width:"350px",
  minHeight:"300px"
}
class SourceList extends React.Component{
    constructor(props){
      super(props);
      this.onClick = this.onClick.bind(this);
    }
    onClick(){
    this.props.history.push({pathname:"/results",state:{source:this.props.name}});
    }
    render(){
        return(
            <div style={root}>
                <Card onClick={this.onClick}>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h4">
                      {this.props.name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h4" style={{fontSize:15}} color='primary'>
                      {this.props.rating}
                    </Typography>
                  </CardContent>
                  <CardMedia style={{paddingTop:'100%'}} image={this.props.image_url}/>
                  <CardContent>
                  <Typography variant="body3" color="textSecondary" component="p">
                      {this.props.description}
                  </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
        );
    }   
}

export default withRouter(SourceList);