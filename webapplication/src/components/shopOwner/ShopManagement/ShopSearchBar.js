import React, { Component } from 'react';
export default class ShopSearchbar extends Component {
    constructor (props)
    {
        super (props)
        this.state = {
            sortType: 1
        }
    }

    handleChangeOfSortShop = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value,
        },
        ()=> this.props.onSortShop (this.state.sortType)
    )
    }

    handleChangeSearch = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.props.onSearchShop (value)
    }
    render() {
        return (

            <div class="row fluid">

                <div class = "col-xm-12">
                    <form action="" method="POST" class="form-inline" role="form" style={Styles.form_search}>
                        <div class="form-group">
                            <input 
                                type="text" 
                                class="form-control" 
                                placeholder="Search Shop" value= {this.props.nameShopForSearching} onChange = {this.handleChangeSearch} />
                        </div>
                    </form>
                </div>

                <div class = "col-xm-12">

                    <form action="" method="POST" role="form" class="form-inline" style={Styles.form_sort}>
                        <label>Sort for: </label>
                        <select onChange = {this.handleChangeOfSortShop} name="sortType" id="input${1/(\w+)/\u\1/g}" class="form-control" required="required">
                            <option value={1} selected  = {true}>All</option>
                            <option value={2}>Shops are being locked</option>
                            <option value={3}>Shops are open</option>
                        </select>
                    </form>
                </div>
            </div>

        )
    }
};

const Styles = {
    div_main: {
        width: '100%'
    },
    form_search: {
        float: 'left',
    },
    form_sort: {
        float: 'right'
    }
}