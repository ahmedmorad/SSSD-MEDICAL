import React, {Component} from 'react';
<<<<<<< HEAD
import {Segment, Image} from 'semantic-ui-react';
=======
import {Segment, Image, Header} from 'semantic-ui-react';
>>>>>>> 547a9ddea41e5801ee9df5768c50bb9e460128c4
import LazyLoad from 'react-lazy-load';
class Home extends Component {

    render() {

        const square = {
            width: 175,
            height: 175,
            margin: 'auto'
        }

        return (

            <LazyLoad>
<<<<<<< HEAD
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

=======
                <div>
                    <Segment.Group>
                        <Segment size='huge'>
                            <Image src='/assets/images/safer-slide-3.png' fluid/>
                        </Segment>
                        <Segment.Group horizontal>
                            <Segment textAlign='center'>
                                <Segment circular style={square}>
                                    <Header as='h2'>
                                        Sale!
                                        <Header.Subheader>
                                            $10.99
                                        </Header.Subheader>
                                    </Header>
                                </Segment>
                            </Segment>
                            <Segment textAlign='center'>
                                <Segment circular inverted style={square}>
                                    <Header as='h2' inverted>
                                        Buy Now
                                        <Header.Subheader>
                                            $10.99
                                        </Header.Subheader>
                                    </Header>
                                </Segment>
                            </Segment>
                            <Segment textAlign='center'>
                                <Segment circular style={square}>
                                    <Header as='h2'>
                                        Sale!
                                        <Header.Subheader>
                                            $10.99
                                        </Header.Subheader>
                                    </Header>
                                </Segment>

                            </Segment>
                        </Segment.Group>
                    </Segment.Group>

                </div>
>>>>>>> 547a9ddea41e5801ee9df5768c50bb9e460128c4
            </LazyLoad>
        );
    }
}

export default Home;