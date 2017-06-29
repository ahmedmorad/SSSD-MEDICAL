import React, {Component} from 'react';
import {Segment, Image, Header} from 'semantic-ui-react';
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
            </LazyLoad>
        );
    }
}

export default Home;