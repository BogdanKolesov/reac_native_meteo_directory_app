import React from 'react';
import { ViewContainter } from '../../atoms'
import { LinkItem } from '../../molecules'

const ItemLinkView = ({ linkItem }) => {
    return (
        <ViewContainter>
            {
                linkItem.map((item, index) => {
                    return (
                        <linkItem item={item} />
                    )
                })
            }
        </ViewContainter>
    );
}

const styles = StyleSheet.create({})

export default ItemLinkView;
