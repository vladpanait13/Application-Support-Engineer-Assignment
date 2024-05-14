def priceCheck(products, productPrices, productSold, soldPrice):

    # Check constraints
    n = len(products)
    m = len(productSold)

    if n <= 1 or n >= 10**5:
        raise ValueError("Number of products must be between 1 and 100.000.")
    for price in productPrices:
        if price <= 1.00 or price >= 100000.00:
            raise ValueError("Product prices must be between 1.00 and 100,000.00.")
    for price in soldPrice:
        if price <= 1.00 or price >= 100000.00:
            raise ValueError("Sold prices must be between 1.00 and 100,000.00.")   
    # Create a dictionary to map products to their correct prices
    product_to_price = dict(zip(products, productPrices))
    
    errors = 0
    for product, price in zip(productSold, soldPrice):
        # Compare the sold price with the correct price
        if product_to_price[product] != price:
            errors += 1
            
    return errors
    
products = ['eggs', 'milk', 'cheese']
productPrices = [2.89, 3.29, 5.79]
productSold = ['eggs', 'eggs', 'cheese', 'milk']
soldPrice = [2.89, 2.99, 5.97, 3.29]

print(priceCheck(products, productPrices, productSold, soldPrice))
