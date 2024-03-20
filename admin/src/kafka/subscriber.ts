import {getRepository} from "typeorm";
import {Link} from "../entity/link.entity";
import {Order} from "../entity/order.entity";
import { OrderItem } from "../entity/order-item.entity";

export class Subscriber {

    static async linkCreated(link: Link) {
        // console.log('link created', link);
        await getRepository(Link).save(link);
    }

    static async orderCompleted(order: Order) {
        await getRepository(Order).save(order);
        order.order_items.forEach(async (orderItem) => {
            await getRepository(OrderItem).save({
                ...orderItem,
                order_id: order.id
            });
        })
    }
}
