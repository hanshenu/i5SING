/**
 * Created by zhaofeng on 7/13/16.
 */
import React, {Component} from 'react';

export default class Pagination extends Component {
    constructor(props) {
        super(props);
    }

    onChange(page) {
        if (page == this.props.page) return;

        this.setState({current: page});
        this.props.onChange && this.props.onChange(page);
    }

    render() {
        let count = this.props.count || 0,
            current = this.props.page || 1,
            pageSize = this.props.pageSize || 20;

        let pages = [];
        for (let page = 0; page < count / pageSize; page++) {
            pages.push(page + 1);
        }

        return (
            <div className="elsa-pagination">
                <ul>
                    {pages.map(page => {
                        {
                            return (
                                <li className={`pointer ${current == page ? 'active' : ''}`}
                                    onClick={this.onChange.bind(this, page)}
                                    key={page}>{page}
                                </li>
                            )
                        }
                    })}
                </ul>
            </div>
        );
    }
}