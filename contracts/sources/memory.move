module memories::memory {
    use std::string;
    use sui::sui::SUI;
    use sui::object;
    use sui::coin;
    use sui::url;
    use sui::transfer;
    use sui::tx_context;
    use sui::balance;

    const ENotEnough: u64 = 0;

    struct Memory has key, store {
        id: object::UID,
        year: u16,
        month: u8,
        day: u8,
        url: url::Url,
        description: string::String
    }

    struct MemoryMinter has key {
        id: object::UID,
        price: u64,
        balance: balance::Balance<SUI>
    }

    struct TreasuryCap has key, store {
        id: object::UID
    }
    
    fun init(ctx: &mut tx_context::TxContext) {
        transfer::transfer(TreasuryCap {
            id: object::new(ctx)
        }, tx_context::sender(ctx));

        transfer::share_object(MemoryMinter {
            id: object::new(ctx),
            price: 100,
            balance: balance::zero()
        });
    }

    public entry fun mint(
        minter: &mut MemoryMinter, 
        year: u16,
        month: u8,
        day: u8,
        url: vector<u8>,
        description: vector<u8>, 
        payment: &mut coin::Coin<SUI>, 
        ctx: &mut tx_context::TxContext
    ) {
        assert!(coin::value(payment) >= minter.price, ENotEnough);

        let memory: Memory = Memory {
            id: object::new(ctx),
            year,
            month,
            day,
            url: url::new_unsafe_from_bytes(url),
            description: string::utf8(description)
        };

        let coin_balance = coin::balance_mut(payment);
        let paid = balance::split(coin_balance, minter.price);

        balance::join(&mut minter.balance, paid);

        transfer::transfer(memory, tx_context::sender(ctx));
    }

    public entry fun collect_profits(
        _: &TreasuryCap, 
        minter: &mut MemoryMinter, 
        ctx: &mut tx_context::TxContext
    ) {
        let amount = balance::value(&minter.balance);
        let profits = coin::take(&mut minter.balance, amount, ctx);

        transfer::public_transfer(profits, tx_context::sender(ctx))
    }

}
        