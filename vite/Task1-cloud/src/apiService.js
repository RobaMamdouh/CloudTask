import DB from './database.js';
import { collection, addDoc, getDocs } from 'firebase/firestore'

// Function to store group name and group type in the firebase database

export const storeGroup = async (groupName, groupType) => {
    try {
        const docRef = await addDoc(collection(DB, 'groups'), {
        groupName,
        groupType,
        });
        return docRef.id;
    } catch (error) {
        return error;
    }
};

// Function to get all the groups from the firebase database

export const getGroups = async () => {
    const groups = [];
    const querySnapshot = await getDocs(collection(DB, 'groups'));
    querySnapshot.forEach((doc) => {
        groups.push(doc.data());
    });
    return groups;
};