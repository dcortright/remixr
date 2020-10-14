import React from 'react';
import {Typography, Input, Button} from 'antd';
import ReactGA from 'react-ga';

const {Title} = Typography;

function SavePlaylist(props) {
    return (
        <div className="rounded-component" style={{padding: '1em', textAlign: 'center'}}>
            <Title level={3} align="center">
                Save Playlist
            </Title>

            {props.isLoggedIn && props.isLoggedIn === true ? (
                <>
                    <Input
                        className="rounded"
                        size="small"
                        value={props.name}
                        style={{width: "75%"}}
                        onChange={({target: {value}}) => {
                            props.setName(value);
                            ReactGA.event({
                                category: 'Save playlist',
                                action: 'Change name',
                                value: value,
                            });
                        }}
                    />
                    <Button type="primary" shape="round" size="small" onClick={props.saveHandler}
                            style={{margin: '1em'}}>
                        Save
                    </Button>
                </>
            ) : (
                <Button
                    type="primary"
                    shape="round"
                    size="small"
                    onClick={props.saveStateAndLogin}
                    style={{marginTop: '1em'}}
                >
                    Log in to save playlist
                </Button>
            )}
        </div>
    );
}

export default React.memo(SavePlaylist);
