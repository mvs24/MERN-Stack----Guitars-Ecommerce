import React from "react";
import UserLayout from "../../hoc/User";
import Button from '../utils/Button'

export default function UserDashboard({user}) {
  return (
    <div>
      <UserLayout>
        <div>
          <div className="user_nfo_panel">
            <h1>User Info</h1>
            <div>
                <span>{user.userData.name}</span>
                <span>{user.userData.lastname}</span>
                <span>{user.userData.email}</span>

            </div>
            <Button 
            type='default'
            title="Edit account info"
            linkTo='/user/user_profile'
            />
          </div>
          <div className="user_nfo_panel">
              <h1>History of Purchases</h1>
              <div className="user_product_block_wrapper">
                    History
              </div>
          </div>
        </div>
      </UserLayout>
    </div>
  );
}
