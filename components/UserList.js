// import {View, Text} from 'react-native';
// import React, {useEffect} from 'react';
// import {useDispatch, useSelector} from 'react-redux';
// import {getUserList} from './redux/action';

// const UserList = () => {
//   const dispatch = useDispatch();
//   const userList = useSelector(state => state.reducer);

//   // console.log('Raw userList:', userList);

//   useEffect(() => {
//     dispatch(getUserList());
//   }, []);

//   return (
//     <View>
//       {userList.length > 0
//         ? userList.map((item, index) => {
//             console.log('Projects', item);
//             return (
//               <View key={index}>
//                 <Text>{item.applicant_details}</Text>
//               </View>
//             );
//           })
//         : null}
//     </View>
//   );
// };

// export default UserList;

import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';

const UserList = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace 'your-api-url' with the actual API endpoint URL
    fetch('http://10.0.2.2:3000/api/v1/project/get-all-projects')
      .then(response => {
        const contentType = response.headers.get('Content-Type');
        console.log('Content-Type:', contentType);

        if (contentType && contentType.includes('application/json')) {
          return response.json();
        } else {
          throw new Error('Expected JSON, but got ' + contentType);
        }
      })
      .then(json => {
        setData(json.projects);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={{flex: 1, padding: 20}}>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={{marginBottom: 20}}>
            <Text>Project ID: {item.id}</Text>
            <Text>Applicant Type: {item.applicant_type}</Text>
            <Text>Status: {item.active === 'Y' ? 'Active' : 'Inactive'}</Text>
            <Text>
              Entry Date: {new Date(item.entry_date).toLocaleDateString()}
            </Text>
          </View>
        )}
      />
      //{' '}
    </View>
  );
};

export default UserList;
