//import moment from 'moment'
import _map from 'lodash/map'
import _assign from 'lodash/assign'
import _findIndex from 'lodash/findIndex'

/**
 * @param {Array} data
 * @param {String} keyField
 * @param {Object} newData
 */
export const updateData = (data, keyField, newData) =>
    _map(
        data,
        item => (item[keyField] !== newData[keyField]
            ? item
            : _assign({}, item, newData))
    )

export const updateRemoveData = (data, itemRemove) => {
    let userIndex = _findIndex(data, item => item.id === itemRemove.id)
    data.splice(userIndex, 1)
    return data
}
/**
 * @param {Array} data
 * @param {String} keyField
 * @param {any} key
 * @param {Function} update
 */
//export const updateDataWith = (data, keyField, key, update) => {
//    const updatedIndex = _findIndex(data, { [keyField]: key })
//
//    if (updatedIndex === -1) {
//        return data
//    }
//
//    const newData = update(data[updatedIndex])
//    const updatedItem = _assign({}, data[updatedIndex], newData)
//
//    return [
//        ...data.slice(0, updatedIndex),
//        updatedItem,
//        ...data.slice(updatedIndex + 1)
//    ]
//}

/**
 *
 * @param {Array} data
 * @param {String} keyField
 * @param {any} deletedKey
 * @param {String} deletedAtField
 */
//export const updateSoftDeleted = (data, keyField, deletedKey, deletedAtField = 'deleted_at') =>
//    updateData(data, keyField, {
//        [keyField]: deletedKey,
//        [deletedAtField]: (moment()).toISOString()
//    })
