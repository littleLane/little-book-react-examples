/**
 * 使用 React.js 构建一个未读消息组件 Notification。
 * 通过 getNotificationsCount() 来获取未读消息的数量 ，如果有未读消息 N 条，而且 N > 0，那么 Notification 组件渲染显示：
a
 *   <span>有(N)条未读消息</span>
 * 
 * 否则显示：
 * 
 *   <span>没有未读消息</span>
 */

import React, { Component } from 'react'

class Notification extends Component {
    getNotificationsCount() {
        return Math.floor(Math.random() * 10) - 5
    }

    render() {
        const count = this.getNotificationsCount;
        return (
            <span>{ count > 0 ? `有(${count})条未读消息` : `没有未读消息` }</span>
        )
    }
}

export default Notification;