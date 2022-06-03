import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as actions from "./../../actions";
import DataTable, { defaultThemes } from "react-data-table-component";
// import DataTableExtensions from "react-data-table-component-extensions";
// import "react-data-table-component-extensions/dist/index.css";
import styled, { keyframes } from "styled-components";
import {
    Badge,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Row,
    FormGroup,
    Col,
    Input,
    NavLink
} from "reactstrap";
import { FaSearch } from "react-icons/fa";
import { AddAlertSharp, AlternateEmailOutlined } from "@material-ui/icons";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import DeleteIcon from "@material-ui/icons/Delete";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import Notif from "../../library/notif.library";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
    margin: 16px;
    animation: ${rotate360} 1s linear infinite;
    transform: translateZ(0);
    border-top: 2px solid grey;
    border-right: 2px solid grey;
    border-bottom: 2px solid grey;
    border-left: 4px solid black;
    background: transparent;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: inline-grid;
`;

const CustomLoader = () => (
    <div style={{ padding: "24px", textAlign: "center" }}>
        <Spinner />
        <div>Sabar Yoo...</div>
    </div>
);

const TextField = styled.input`
    height: 32px;
    width: 200px;
    border-radius: 3px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border: 1px solid #e5e5e5;
    padding: 0 32px 0 16px;

    &:hover {
        cursor: pointer;
    }
`;

const ClearButton = styled(Button)`
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    height: 34px;
    width: 32px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const FilterComponent = ({ filterText, onFilter, onClear }) => (
    <>
        <TextField
            id='search'
            type='text'
            placeholder='Filter By Name'
            aria-label='Search Input'
            value={filterText}
            onChange={onFilter}
        />
        <ClearButton type='button' onClick={onClear}>
            X
        </ClearButton>
    </>
);
const AntSwitch = withStyles((theme) => ({
    root: {
        width: 28,
        height: 16,
        padding: 0,
        display: "flex"
    },
    switchBase: {
        padding: 2,
        color: theme.palette.grey[500],
        "&$checked": {
            transform: "translateX(12px)",
            color: theme.palette.common.white,
            "& + $track": {
                opacity: 1,
                backgroundColor: theme.palette.primary.main,
                borderColor: theme.palette.primary.main
            }
        }
    },
    thumb: {
        width: 12,
        height: 12,
        boxShadow: "none"
    },
    track: {
        border: `1px solid ${theme.palette.grey[500]}`,
        borderRadius: 16 / 2,
        opacity: 1,
        backgroundColor: theme.palette.common.white
    },
    checked: {}
}))(Switch);

class UserManagement extends Component {
    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClickStatus = this.handleClickStatus.bind(this);
        // this.updateUserStatus = this.updateUserStatus.bind(this)

        this.state = {
            page: 1,
            size: 10,
            filterText: "",
            resetPaginationToggle: false,
            isLoading: false,
            pending: true,
            rows: [],
            show: false,
            modalOpen: false,
            cariKader: "",
            checkedC: true,
            activated: "",
            columnsUser: [
                {
                    name: "ID Kader",
                    selector: "login",
                    cell: (row) => (row.login === null ? "-" : row.login)
                },
                {
                    name: "Nama",
                    selector: "firstName",
                    cell: (row) =>
                        row.firstName === null ? "-" : row.firstName
                },
                {
                    name: "Login",
                    selector: "login",
                    cell: (row) => (row.login === null ? "-" : row.login)
                },
                {
                    name: "Status",
                    // selector: 'activated',
                    cell: (row) => (
                        <Typography component='div'>
                            <Grid
                                component='label'
                                container
                                alignItems='center'
                                spacing={1}>
                                <Grid item>
                                    <Badge color='danger'>No Aktif</Badge>
                                </Grid>
                                <Grid item>
                                    <AntSwitch
                                        checked={row.activated === true}
                                        onClick={() => {
                                            this.handleClickStatus(
                                                row,
                                                row.activated
                                            );
                                        }}
                                        name='checkedC'
                                    />
                                </Grid>
                                <Grid item>
                                    <Badge color='success' pill>
                                        Aktif
                                    </Badge>
                                </Grid>
                            </Grid>
                        </Typography>
                        //     <Badge color="success">
                        //         Aktif
                        //     </Badge>
                        // :
                        //     <Badge color="danger">
                        //         Tidak Aktif
                        //     </Badge>
                    )
                },
                {
                    name: "Action",
                    // selector: 'passed',
                    button: true,
                    cell: (row) => (
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center"
                            }}>
                            {/* <button className="btn btn-destroy btn-sm" onClick={() => {this.handleDelete(row.login)}}>DELETE</button> */}
                            <Tooltip disableFocusListener title='Delete'>
                                <NavLink
                                    style={{ cursor: "pointer" }}
                                    onClick={() => {
                                        this.handleDelete(row.login);
                                    }}>
                                    <Fab
                                        size='small'
                                        aria-label='Delete'
                                        style={{
                                            background: "red",
                                            color: "white"
                                        }}
                                        color='secondary'>
                                        <DeleteIcon style={{ width: "19px" }} />
                                    </Fab>
                                </NavLink>
                            </Tooltip>
                            <Tooltip disableFocusListener title='Reset'>
                                <NavLink
                                    style={{ cursor: "pointer" }}
                                    onClick={() => {
                                        this.handleReset(row.login);
                                    }}>
                                    <Fab
                                        size='small'
                                        aria-label='Reset'
                                        style={{
                                            background: "green",
                                            color: "white"
                                        }}
                                        color='secondary'>
                                        <RotateLeftIcon
                                            style={{ width: "19px" }}
                                        />
                                    </Fab>
                                </NavLink>
                            </Tooltip>
                            {/* <Modal
                                isOpen={this.state.modalOpen}
                                // toggle={toggleModal}
                                onClick={() =>
                                    this.setState({modalOpen: !this.state.modalOpen})
                                }
                                wrapClassName="modal-right"
                                backdrop="static"
                            >
                                {console.log("this.state.modalOpen >>", this.state.modalOpen)}
                            </Modal> */}
                        </div>
                    )
                    // <div>
                    // <Button
                    //     color="primary"
                    //     onClick={function noRefCheck(){}}
                    // >
                    //     Open
                    // </Button>
                    //     <Offcanvas show={show} onHide={handleClose} {...props}>
                    //         <Offcanvas.Header closeButton>
                    //             <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                    //         </Offcanvas.Header>
                    //         <Offcanvas.Body>
                    //             Some text as placeholder. In real life you can have the elements you
                    //             have chosen. Like, text, images, lists, etc.
                    //         </Offcanvas.Body>
                    //     </Offcanvas>
                    // </div>
                }
            ]
        };
        // console.log("filterText >>", filterText)
    }

    async handleDelete(_id) {
        // alert("ID: " + _id)
        // console.log("ID::", _id)
        // console.log(this.props.fetchUserManagement(this.state.page, this.state.size, _id))
    }

    async handleReset(_id) {
        // alert("ID: " + _id)
        console.log("ID::", result);
        // const result = await Notif(this.props.userResetPassword(_id))
        const result = await Notif.confirmNotifResetPassword();
        if (result.isConfirmed) {
            const res = await this.props.userResetPassword(_id);
            switch (res.status) {
                case 200:
                    Notif.toastSwal("success", "Reset Password Berhasil");
                    setTimeout(() => {
                        window.location.reload();
                    }, 1200);
                    break;
                case 204:
                    Notif.toastSwal("info", "Data Tidak Ditemukan?");
                    break;
                default:
                    Notif.errorSwal("SOMETHING WRONG!");
                    break;
            }
        } else {
            Notif.toastSwal("question", "ngga jadi yaa!!!");
        }
        // if (result.status != 200) {
        //     alert(`failed to delete activity on error ${result.status} > ${result.data.message}`)
        // } else {
        //     alert(`${result.data.message}`)
        // }
        // this.props.userResetPassword(_id)
    }

    handleChange = (e) => {
        // console.log("Testt >>", !this.state.checkedC === true)
        this.setState({
            checkedC: !this.state.checkedC,
            activated: !this.state.checkedC === true ? false : true
        });
    };

    handleClickStatus = (row, status) => {
        let sts = false;

        if (!status) sts = true;

        console.log(`DATA ${row.email} changed to >> `, sts);

        this.updateUserStatus(
            row.id,
            row.login,
            row.email,
            sts,
            this.state.cariKader
        );
    };

    async updateUserStatus(id, login, email, checkedC) {
        console.log("data >", id, login, email, checkedC);
        const result = await this.props.updateUser(id, login, email, checkedC);
        if (result.status === 200) {
            console.log("OKEEEE...");
        }
    }

    componentWillMount() {
        // this.setState({
        //     isLoading: true
        // })
        // this.filteredItems = this.props.usermanagement.data.filter(
        //     (item) =>
        //       item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
        // );
        this.props.fetchUserManagement(this.state.page, this.state.size);
        const timeout = setTimeout(() => {
            this.setState({
                // rows: this.props.usermanagement.data,
                pending: false
            });
            // setPending(false);
        }, 2000);
        return () => clearTimeout(timeout);
    }

    handleClear = () => {
        const { resetPaginationToggle, filterText } = this.state;

        if (this.state.filterText) {
            this.setState({
                resetPaginationToggle: !resetPaginationToggle,
                filterText: ""
            });
        }
    };

    getSubHeaderComponent = () => {
        return (
            <FilterComponent
                onFilter={(e) => {
                    let newFilterText = e.target.value;
                    this.filteredItems = this.props.usermanagement.data.filter(
                        (item) =>
                            // console.log("Item >>", item.login)
                            item.firstName &&
                            item.firstName
                                .toLowerCase()
                                .includes(newFilterText.toLowerCase())
                    );
                    this.setState({ filterText: newFilterText });
                }}
                onClear={this.handleClear}
                filterText={this.state.filterText}
            />
        );
    };

    fetchData = () => {
        this.props.fetchUserManagement(this.state.page, this.state.size);
    };
    // filterFetchData = () => {
    //     this.props.usermanagement.data.filter(
    //         item => console.log("item >", item)
    //         // item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),
    //     )
    // }

    onClear = () => {
        this.setState({
            cariKader: ""
        });
    };

    cariKader = () => {
        this.props.fetchUserManagement(
            this.state.page,
            this.state.size,
            this.state.cariKader
        );
    };

    handleInputSearch = (e) => {
        if (e.target.value === "") {
            this.cariKader();
        }
        // console.log("e >>", e.target.value)
        this.setState({ cariKader: e.target.value });
        this.props.fetchUserManagement(
            this.state.page,
            this.state.size,
            e.target.value
        );
        // this.cariKader()
    };

    handlePageChange = (page) => {
        this.setState(
            {
                page: page
            },
            () => {
                this.fetchData();
            }
        );
    };

    handlePerRowsChange = (size, page) => {
        this.setState(
            {
                size: size,
                page: page
            },
            () => {
                this.fetchData();
            }
        );
    };

    render() {
        return (
            <Fragment>
                <h3>User List</h3>
                <Row>
                    <Col xs={12} md={6} lg={12}>
                        {/* <label>Cari Id Kader / login</label> */}
                        <Row>
                            <Col lg={3} className='mb-2'>
                                <Input
                                    id='nik'
                                    type='text'
                                    name='nik'
                                    placeholder='Cari Id Kader / login'
                                    value={this.state.cariKader}
                                    onChange={this.handleInputSearch}
                                />
                            </Col>
                            <Col lg={1} sm={6}>
                                {/* onClick={() => this.props.history.push(`/isoman-kebutuhan/${this.state.cariNik}`)} */}
                                {/* <Button style={{ width: '100%', fontSize: '1.2em' }} className="btn btn-primary p-0 pt-1 pb-1" onClick={this.cariKader}><FaSearch/></Button> */}
                            </Col>
                        </Row>
                    </Col>
                </Row>
                {!this.props.usermanagement ? (
                    <CustomLoader />
                ) : (
                    <DataTable
                        // title="User List"
                        columns={this.state.columnsUser}
                        data={this.props.usermanagement.data}
                        // data={this.state.rows}
                        progressPending={this.state.isLoading}
                        // customStyles={customStyles}
                        pagination
                        paginationServer
                        pointerOnHover
                        highlightOnHover
                        noHeader
                        paginationTotalRows={Number(
                            this.props.usermanagement.headers["x-total-count"]
                        )}
                        // selectableRows
                        onChangeRowsPerPage={this.handlePerRowsChange}
                        onChangePage={this.handlePageChange}
                        progressComponent={<CustomLoader />}
                    />
                )}
                {/* <DataTable
                        title="Contact List"
                        columns={this.state.columnsUser}
                        data={this.filteredItems}
                        pagination
                        paginationResetDefaultPage={this.state.resetPaginationToggle} // optionally, a hook to reset pagination to page 1
                        subHeader
                        subHeaderComponent={this.getSubHeaderComponent()}
                        selectableRows
                        persistTableHead
                    /> */}
                {/* {this.fetchData} */}
                {/* {!this.props.usermanagement ? "Loading" : console.log("dapat data >>>> ", this.props.usermanagement.headers['x-total-count'])} */}
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        usermanagement: state.userManagement.userManagement
    };
};

export default connect(mapStateToProps, actions)(UserManagement);
