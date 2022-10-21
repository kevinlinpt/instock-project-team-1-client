import React from 'react';
import { Route, useLocation, Switch } from 'react-router-dom';
import WarehouseList from '../WarehouseList/WarehouseList';
import DeleteWarehouse from '../DeleteWarehouse/DeleteWarehouse';
import WarehouseDetails from '../WarehouseDetails/WarehouseDetails';

export default function NavigationMap() {
  let location = useLocation();
  //Background location is from where the modal Component is called from
  let background = location.state && location.state.background;
  return (
    <>
      <Switch location={background || location}>
        <Route path="/warehouse/edit/:location" children="" />
        <Route path="/warehouse/:location" children={<WarehouseDetails />} />
        <Route exact path="/warehouse/new" children="" />
        <Route path="/inventory/delete/:item" children="" />
        <Route path="/inventory/edit/:item" children="" />
        <Route path="/inventory/new" children="" />
        <Route path="/inventory/:item" children="" />
        <Route exact path="/warehouse" children={<WarehouseList />} />
        <Route exact path="/inventory" children="" />
        <Route exact path="/" children={<WarehouseList />} />
      </Switch>
      {/* Show the requested modal when a background page is set */}
      {background && (
        <Route
          path="/warehouse/delete/:location"
          children={<DeleteWarehouse />}
        />
      )}
    </>
  );
}
