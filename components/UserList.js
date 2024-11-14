import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getUserList} from './redux/action';

const UserList = () => {
  const dispatch = useDispatch();
  const userList = useSelector(state => state.reducer);

  useEffect(() => {
    dispatch(getUserList());
  }, []);

  return (
    <View>
      {userList.length > 0
        ? userList.map((item, index) => (
            <View key={index}>
              <Text>{item.firstName}</Text>
            </View>
          ))
        : null}
    </View>
  );
};

export default UserList;
