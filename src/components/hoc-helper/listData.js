import React, { Component } from 'react'
import ErrorBoundery from '../Alerts/ErrorBoundery';
import Loading from '../Loading';
const listData = (View) => {
    return class extends Component {
        state = {
            data: null,
        }
        componentDidMount() {
            if (this.props.getData)
                this.props.getData()
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
export { listData };