import React from 'react'
import ErrorBoundery from '../Alerts/ErrorBoundery';
import Loading from '../Loading';
const withData = (View, getData) => {
    return class extends Component {
        state = {
            data: null,
        }
        componentDidMount() {
            if (getData)
                getData()
                    .then((data) => {
                        this.setState({
                            data
                        });
                    })
        }
        render() {
            const { data } = this.state
            if (!data) {
                return <Loading />
            }
            return (
                <ErrorBoundery>
                    <View {...this.props} data={data} />
                </ErrorBoundery>
            );
        }
    }
}
export default withData;