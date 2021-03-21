import { Box, Button } from "@material-ui/core";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { getCityWeather } from "../../actions";
import { RootState } from "../../reducers";
import CityWeather from "../city-weather";
import CitySearch from "../shared/city-search";

const mapStateToProps = (state: RootState) => {
    const { weather } = state;
    return weather;
}

const connector = connect(mapStateToProps, {getCityWeather});

type Props = ConnectedProps<typeof connector>;

function HomeTemplate(props: Props){
    const { getCityWeather } = props;

    const handleClick = () => {
        getCityWeather('');
    }

    return (
        <Box width='80%' margin='0 auto' mt='64px' p={2}>
            <CitySearch />
            <Button onClick={handleClick}>
                Get Vancouver Weather
            </Button>
            <CityWeather />
        </Box>
    )
}

const Home = connector(HomeTemplate);

export default Home;
