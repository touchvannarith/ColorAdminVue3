<template>
	<div class="d-flex align-items-center">
		<div>
			<ol class="breadcrumb">
				<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
				<li class="breadcrumb-item"><a href="javascript:;">Extra</a></li>
				<li class="breadcrumb-item active">Order Details</li>
			</ol>
			<h1 class="page-header">
				Order Details
			</h1>
		</div>
	</div>
	<div class="mb-3 d-md-flex fw-bold">
		<div class="mt-md-0 mt-2"><a href="#" class="text-decoration-none text-dark"><i class="fa fa-print fa-fw me-1 text-dark text-opacity-50"></i> Print</a></div>
		<div class="ms-md-4 mt-md-0 mt-2"><a href="#" class="text-decoration-none text-dark"><i class="fa fa-boxes-stacked fa-fw me-1 text-dark text-opacity-50"></i> Restock items</a></div>
		<div class="ms-md-4 mt-md-0 mt-2"><a href="#" class="text-decoration-none text-dark"><i class="fa fa-pen fa-fw me-1 text-dark text-opacity-50"></i> Edit</a></div>
		<div class="ms-md-4 mt-md-0 mt-2 dropdown-toggle">
			<a href="#" data-bs-toggle="dropdown" class="text-decoration-none text-dark text-opacity-75"><i class="fa fa-cog fa-fw me-1 text-dark text-opacity-50"></i> More Actions <b class="caret"></b></a>
			<div class="dropdown-menu">
				<a class="dropdown-item" href="#">Action</a>
				<a class="dropdown-item" href="#">Another action</a>
				<a class="dropdown-item" href="#">Something else here</a>
				<div role="separator" class="dropdown-divider"></div>
				<a class="dropdown-item" href="#">Separated link</a>
			</div>
		</div>
	</div>
	<div class="row gx-4">
		<div class="col-xl-8 mb-xl-0 mb-4">
			<div class="card border-0 mb-4">
				<div class="card-header bg-none p-3 h6 m-0 d-flex align-items-center">
					<i class="fa fa-shopping-bag fa-lg me-2 text-gray text-opacity-50"></i>
					Products (3)
					<a href="#" class="ms-auto text-decoration-none text-gray-500"><i class="fa fa-truck fa-lg me-1"></i> Add Tracking Link</a>
				</div>
				<div class="card-body p-3 text-dark fw-bold">
					<div class="row align-items-center">
						<div class="col-lg-8 d-flex align-items-center">
							<div class="h-65px w-65px d-flex align-items-center justify-content-center position-relative">
								<img src="/assets/img/product/product-1.jpg" class="mw-100 mh-100" />
								<span class="w-20px h-20px p-0 d-flex align-items-center justify-content-center badge bg-primary text-white position-absolute end-0 top-0 fw-bold fs-12px rounded-pill mt-n2 me-n2">1</span>
							</div>
							<div class="ps-3 flex-1">
								<div><a href="#" class="text-decoration-none text-dark">iPhone 13 Pro Max</a></div>
								<div class="text-dark text-opacity-50 small fw-bold">
									SKU: IP13PROMAX-512
								</div>
							</div>
						</div>
						<div class="col-lg-2 m-0 ps-lg-3">
							$999 x 1
						</div>
						<div class="col-lg-2 text-dark fw-bold m-0 text-end">
							$999
						</div>
					</div>
					<hr class="my-4" />
					<div class="row">
						<div class="col-lg-8 d-flex align-items-center">
							<div class="h-65px w-65px d-flex align-items-center justify-content-center position-relative">
								<img src="/assets/img/product/product-2.jpg" class="mw-100 mh-100" />
								<span class="w-20px h-20px p-0 d-flex align-items-center justify-content-center badge bg-primary text-white position-absolute end-0 top-0 fw-bold fs-12px rounded-pill mt-n2 me-n2">1</span>
							</div>
							<div class="ps-3 flex-1">
								<div class=""><a href="#" class="text-decoration-none text-dark">Macbook Pro 2025</a></div>
								<div class="text-dark text-opacity-50 small fw-bold">
									SKU: MACBOOKPRO-1TB
								</div>
							</div>
						</div>
						<div class="col-lg-2 m-0 ps-lg-3">
							$1,999 x 1
						</div>
						<div class="col-lg-2 text-dark fw-bold m-0 text-end">
							$1,999
						</div>
					</div>
					<hr class="my-4" />
					<div class="row">
						<div class="col-lg-8 d-flex align-items-center">
							<div class="h-65px w-65px d-flex align-items-center justify-content-center position-relative">
								<img src="/assets/img/product/product-3.jpg" class="mw-100 mh-100" />
								<span class="w-20px h-20px p-0 d-flex align-items-center justify-content-center badge bg-primary text-white position-absolute end-0 top-0 fw-bold fs-12px rounded-pill mt-n2 me-n2">1</span>
							</div>
							<div class="ps-3 flex-1">
								<div class=""><a href="#" class="text-decoration-none text-dark">Apple Watch 5</a></div>
								<div class="text-dark text-opacity-50 small fw-bold">
									SKU: APPLEWATCHBLACK
								</div>
							</div>
						</div>
						<div class="col-lg-2 m-0 ps-lg-3">
							$599 x 1
						</div>
						<div class="col-lg-2 text-dark fw-bold m-0 text-end">
							$599
						</div>
					</div>
				</div>
				<div class="card-footer bg-none d-flex p-3">
					<a href="#" class="btn btn-default ms-auto">More <b class="caret"></b></a>
					<a href="#" class="btn btn-primary ms-2">Add Tracking</a>
				</div>
			</div>
			<div class="card border-0">
				<div class="card-header bg-none p-3 h6 m-0 d-flex align-items-center">
					<i class="fa fa-credit-card fa-lg me-2 text-gray text-opacity-50"></i>
					Payment Records
					<a href="#" class="ms-auto text-decoration-none text-gray-500"><i class="fab fa-paypal me-1 fa-lg"></i> View paypal records</a>
				</div>
				<div class="card-body">
					<table class="table table-borderless table-sm fw-bold m-0">
						<tbody>
							<tr>
								<td class="w-150px">Subtotal</td>
								<td>3 items</td>
								<td class="text-end">$3,496.00</td>
							</tr>
							<tr>
								<td>Tax</td>
								<td>GST 5%</td>
								<td class="text-end">$174.80</td>
							</tr>
							<tr>
								<td>Shipping Fee</td>
								<td>promo code: <u class="text-success">FREESHIPPING</u> (<strike>$120.00</strike>)</td>
								<td class="text-end">$0.00</td>
							</tr>
							<tr>
								<td class="pb-2" colspan="2"><b>Total</b></td>
								<td class="text-end pb-2 text-decoration-underline"><b>$3670.80</b></td>
							</tr>
							<tr>
								<td colspan="3">
									<hr class="m-0" />
								</td>
							</tr>
							<tr>
								<td class="pt-2 pb-2" nowrap>
									Paid by customer
								</td>
								<td class="pt-2 pb-2">
									via <a href="#" class="text-primary text-decoration-none">Paypal</a> (#IRU9589320)
								</td>
								<td class="pt-2 pb-2 text-end">$3670.80</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="card-footer bg-none d-flex p-3">
					<a href="#" class="btn btn-primary ms-auto">Mark as paid</a>
				</div>
			</div>
		</div>
		<div class="col-xl-4">
			<div class="card border-0 mb-4">
				<div class="card-header bg-none p-3 h6 m-0 d-flex align-items-center">
					Notes
					<a href="#" class="ms-auto text-decoration-none text-gray-500">Edit</a>
				</div>
				<div class="card-body">
					No notes from customer
				</div>
			</div>
			<div class="card border-0 mb-4">
				<div class="card-header bg-none p-3 h6 m-0 d-flex align-items-center">
					Customer
					<a href="#" class="ms-auto text-decoration-none text-gray-500">Edit</a>
				</div>
				<div class="card-body fw-bold">
					<div class="d-flex align-items-center">
						<a href="#" class="d-block"><img src="/assets/img/user/user-1.jpg" width="45" class="rounded-pill" /></a>
						<div class="flex-1 ps-3">
							<a href="#" class="d-block text-decoration-none">John Smith</a>
							johnsmith@gmail.com
						</div>
					</div>
				</div>
			</div>
			<div class="card border-0 mb-4">
				<div class="card-header bg-none p-3 h6 m-0 d-flex align-items-center">
					Shipping Information
					<a href="#" class="ms-auto text-decoration-none text-gray-500">Edit</a>
				</div>
				<div class="card-body fw-bold">
					<i class="fa fa-phone fa-fw"></i> +916-663-4289<br /><br />
					867 Highland View Drive<br />
					Newcastle, CA<br />
					California<br />
					95658<br />
					<br />
					<a href="#" class="text-decoration-none text-gray-600"><i class="fa fa-location-dot fa-fw"></i> View map</a>
				</div>
			</div>
			<div class="card border-0 mb-4">
				<div class="card-header bg-none p-3 h6 m-0 d-flex align-items-center">
					Billing Information
					<a href="#" class="ms-auto text-decoration-none text-gray-500">Edit</a>
				</div>
				<div class="card-body fw-bold">
					867 Highland View Drive<br />
					Newcastle, CA<br />
					California<br />
					95658<br />
				</div>
			</div>
		</div>
	</div>
</template>