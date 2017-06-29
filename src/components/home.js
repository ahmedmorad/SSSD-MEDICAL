import React, {Component} from 'react';
import {Segment, Image} from 'semantic-ui-react';
class Home extends Component {
    render() {
        return (
            <Segment.Group>
                <Segment size='huge'>
                    <Image src='/assets/images/safer-slide-3.png' fluid/>
                </Segment>
                <Segment.Group horizontal>
                    <Segment textAlign='center'>Top</Segment>
                    <Segment textAlign='center'>Middle</Segment>
                    <Segment textAlign='center'>Bottom</Segment>
                </Segment.Group>
            </Segment.Group>
        );
    }
}

export default Home;