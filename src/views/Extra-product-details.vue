<script>
import tagsInput from '@/components/plugins/TagsInput.vue';
import quillEditor from '@/components/plugins/QuillEditor.vue';

export default {
  data () {
    return {
      tag: '',
      tags: ['Laptop', 'Apple'],
      
      tagSize: '',
      tagSizes: ['XL', 'S'],
      
      tagColor: '',
      tagColors: ['Black'],
      
      tagMaterial: '',
      tagMaterials: []
    }
  },
  components: {
    tagsInput: tagsInput,
    quillEditor: quillEditor
  }
}
</script>
<template>
	<div class="d-flex align-items-center mb-3">
		<div>
			<ol class="breadcrumb">
				<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
				<li class="breadcrumb-item"><a href="javascript:;">Extra</a></li>
				<li class="breadcrumb-item active"><i class="fa fa-arrow-back"></i> Product Details</li>
			</ol>
			<h1 class="page-header mb-0">Product Details</h1>
		</div>
	</div>
	
	<div class="row">
		<div class="col-xl-8">
			<div class="card border-0 mb-4">
				<div class="card-header h6 mb-0 bg-none p-3">
					<i class="fa fa-dolly fa-lg fa-fw text-dark text-opacity-50 me-1"></i> Product Information
				</div>
				<div class="card-body">
					<div class="mb-3">
						<label class="form-label">Title</label>
						<input type="text" class="form-control" name="title" placeholder="Product name">
					</div>
					<div class="">
						<label class="form-label">Description</label>
						<div class="form-control p-0 overflow-hidden h-250px">
							<quill-editor theme="snow" />
						</div>
					</div>
				</div>
			</div>
			<div class="card border-0 mb-4">
				<div class="card-header h6 mb-0 bg-none p-3">
					<i class="fa fa-file-image fa-lg fa-fw text-dark text-opacity-50 me-1"></i> Media
				</div>
				<div class="card-body">
					<div id="dropzone">
						<form action="/upload" class="dropzone needsclick" id="demo-upload">
							<div class="dz-message needsclick">
								Drop files <b>here</b> or <b>click</b> to upload.<br />
								<span class="dz-note needsclick">
									(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)
								</span>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div class="card border-0 mb-4">
				<div class="card-header h6 mb-0 bg-none p-3">
					<i class="fa fa-sitemap fa-lg fa-fw text-dark text-opacity-50 me-1"></i> Variants
				</div>
				<div class="card-body">
					<div class="alert alert-success">
						Add variants if this product comes in multiple versions, like different sizes or colors.
					</div>
					<div class="row mb-3 fw-bold text-dark">
						<div class="col-4">Option name</div>
						<div class="col-8">Option values</div>
					</div>
					<div class="row mb-3 gx-3">
						<div class="col-4"><input type="text" class="form-control" name="variant[0][name]" placeholder="e.g Size" value="Size" /></div>
						<div class="col-7">
							<tags-input v-model="tagSize" :tags="tagSizes" />
						</div>
						<div class="col-1">
							<a href="#" class="btn btn-default d-block"><i class="fa fa-trash"></i></a>
						</div>
					</div>
					<div class="row mb-3 gx-3">
						<div class="col-4"><input type="text" class="form-control" name="variant[1][name]" placeholder="e.g Color" value="Color" /></div>
						<div class="col-7">
							<tags-input v-model="tagColor" :tags="tagColors" />
						</div>
						<div class="col-1">
							<a href="#" class="btn btn-default d-block"><i class="fa fa-trash"></i></a>
						</div>
					</div>
					<div class="row mb-3 gx-3">
						<div class="col-4"><input type="text" class="form-control" name="variant[1][name]" placeholder="e.g Material" value="Material" /></div>
						<div class="col-7">
							<tags-input v-model="tagMaterial" :tags="tagMaterials" />
						</div>
						<div class="col-1">
							<a href="#" class="btn btn-default d-block"><i class="fa fa-trash"></i></a>
						</div>
					</div>
					<p>Modify the variants to be created:</p>
					<table class="table fw-bold">
						<thead>
							<tr>
								<th width="1%"></th>
								<th>Variant</th>
								<th width="150px">SKU</th>
								<th width="150px">Price</th>
								<th width="75px">Quantity</th>
								<th width="150px"></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td class="align-middle">
									<div class="form-check">
										<input type="checkbox" name="variant[0][enabled]" id="variant_0_enabled" value="1" checked class="form-check-input" />
										<label class="form-check-label">&nbsp;</label>
									</div>
								</td>
								<td class="fs-13px align-middle">
									<span class="text-dark">XL</span>
									<span class="text-muted mx-1"> • </span>
									<span class="text-indigo">Black</span>
								</td>
								<td><input type="text" class="form-control" value="" placeholder="#SKU000001" /></td>
								<td><input type="text" class="form-control" value="" placeholder="0.00" /></td>
								<td><input type="text" class="form-control" value="" placeholder="0" /></td>
								<td><a href="#" class="btn btn-white d-block">Upload Image</a></td>
							</tr>
							<tr>
								<td class="align-middle">
									<div class="form-check">
										<input type="checkbox" name="variant[1][enabled]" id="variant_1_enabled" value="1" class="form-check-input" />
										<label class="form-check-label">&nbsp;</label>
									</div>
								</td>
								<td class="fs-13px align-middle">
									<span class="text-dark">S</span>
									<span class="text-muted mx-1"> • </span>
									<span class="text-indigo">Black</span>
								</td>
								<td><input type="text" class="form-control" value="" placeholder="#SKU000001" /></td>
								<td><input type="text" class="form-control" value="" placeholder="0.00" /></td>
								<td><input type="text" class="form-control" value="" placeholder="0" /></td>
								<td><a href="#" class="btn btn-white d-block">Upload Image</a></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div class="card border-0 mb-4">
				<div class="card-header h6 mb-0 bg-none p-3">
					<i class="fa fa-shield-halved fa-lg fa-fw text-dark text-opacity-50 me-1"></i> Warranty
				</div>
				<div class="card-body">
					<div class="row">
						<div class="col-lg-6">
							<div class="mb-lg-0 mb-3">
								<label class="form-label">Warranty Type</label>
								<select class="form-select" name="warranty_type_id">
									<option value="">-- Select Warranty Type --</option>
									<option value="1">No Warranty</option>
									<option value="2">Local Supplier Warranty</option>
									<option value="3">Local Manufacturer Warranty</option>
									<option value="4">International Manufacturer Warranty</option>
								</select>
							</div>
						</div>
						<div class="col-lg-6">
							<div class="mb-lg-0 mb-3">
								<label class="form-label">Warranty Period</label>
								<select class="form-select" name="warranty_id">
									<option value="">-- Select Warranty Period --</option>
									<option value="1">1 Month</option>
									<option value="2">3 Months</option>
									<option value="3">6 Months</option>
									<option value="4">1 Year</option>
									<option value="5">2 Years</option>
									<option value="6">3 Years</option>
									<option value="7">4 Years</option>
									<option value="8">5 Years</option>
									<option value="9">6 Years</option>
									<option value="10">7 Years</option>
									<option value="11">8 Years</option>
									<option value="12">9 Years</option>
									<option value="13">10 Years</option>
								</select>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="card border-0 mb-4">
				<div class="card-header h6 mb-0 bg-none p-3">
					<i class="fa fa-box fa-lg fa-fw text-dark text-opacity-50 me-1"></i> Package Content
				</div>
				<div class="card-body">
					<div class="mb-3">
						<label class="form-label">What's in the box</label>
						<input type="text" class="form-control" name="package_content" />
					</div>
					<div class="row mb-n3">
						<div class="col-lg-6">
							<div class="mb-3">
								<label class="form-label">Weight</label>
								<input type="text" class="form-control" name="weight" placeholder="(kg)">
							</div>
						</div>
						<div class="col-lg-6">
							<div class="form-group">
								<label class="form-label">Parcel Size</label>
								<div class="row">
									<div class="col-4">
										<div class="input-group">
											<span class="input-group-text">W</span>
											<input type="text" class="form-control" placeholder="(cm)" name="width" />
										</div>
									</div>
									<div class="col-4">
										<div class="input-group">
											<span class="input-group-text">L</span>
											<input type="text" class="form-control" placeholder="(cm)" name="length" />
										</div>
									</div>
									<div class="col-4">
										<div class="input-group">
											<span class="input-group-text">H</span>
											<input type="text" class="form-control" placeholder="(cm)" name="height" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="card-body bg-light rounded-bottom">
					<div class="form-group mb-0">
						<label class="form-label">Shipping</label>
						<div class="shipping-container">
							<hr class="mt-2 mb-2">
							<div class="row align-items-center">
								<div class="col-6 pt-1 pb-1">No shipping fee</div>
								<div class="col-6 d-flex align-items-center">
									<div class="form-check form-switch ms-auto">
										<input type="checkbox" class="form-check-input" id="shippingFree" name="shipping_free_enable" checked value="1" />
										<label class="form-check-label" for="shippingFree">&nbsp;</label>
									</div>
								</div>
							</div>
							<hr class="mt-2 mb-2">
							<div class="row align-items-center">
								<div class="col-6 pt-1 pb-1">
									AliExpress
								</div>
								<div class="col-6 d-flex align-items-center">
									<div class="form-check form-switch ms-auto">
										<input type="checkbox" class="form-check-input" id="shippingAliExpress" name="shipping_enable" value="AliExpress">
										<label class="form-check-label" for="shippingAliExpress">&nbsp;</label>
									</div>
								</div>
							</div>
							<hr class="mt-2 mb-2">
							<div class="row align-items-center">
								<div class="col-6 pt-1 pb-1">
									SaleHoo
								</div>
								<div class="col-6 d-flex align-items-center">
									<div class="form-check form-switch ms-auto">
										<input type="checkbox" class="form-check-input" id="shippingSaleHoo" name="shipping_enable" value="SaleHoo" />
										<label class="form-check-label" for="shippingSaleHoo">&nbsp;</label>
									</div>
								</div>
							</div>
							<hr class="mt-2 mb-2">
							<div class="row align-items-center">
								<div class="col-6 pt-1 pb-1">
									Megagoods
								</div>
								<div class="col-6 d-flex align-items-center">
									<div class="form-check form-switch ms-auto">
										<input type="checkbox" class="form-check-input" id="shippingMegagoods" name="shipping_enable" value="Megagoods">
										<label class="form-check-label" for="shippingMegagoods">&nbsp;</label>
									</div>
								</div>
							</div>
							<hr class="mt-2 mb-2">
							<div class="row align-items-center">
								<div class="col-6 pt-1 pb-1">
									Wholesale2B
								</div>
								<div class="col-6 d-flex align-items-center">
									<div class="form-check form-switch ms-auto">
										<input type="checkbox" class="form-check-input" id="shippingWholesale2B" name="shipping_enable" value="Wholesale2B" />
										<label class="form-check-label" for="shippingWholesale2B">&nbsp;</label>
									</div>
								</div>
							</div>
							<hr class="mt-2 mb-2">
							<div class="row align-items-center">
								<div class="col-6 pt-1 pb-1">
									Sunrise Wholesale
								</div>
								<div class="col-6 d-flex align-items-center">
									<div class="form-check form-switch ms-auto">
										<input type="checkbox" class="form-check-input" id="shippingSunriseWholesale" name="shipping_enable" value="Sunrise Wholesale" />
										<label class="form-check-label" for="shippingSunriseWholesale">&nbsp;</label>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xl-4">
			<div class="card border-0 mb-4">
				<div class="card-header h6 mb-0 bg-none p-3 d-flex">
					<div class="flex-1">
						<div>Sales channels (2/3)</div>
					</div>
					<div><a href="#" class="text-decoration-none text-gray-500">Manage</a></div>
				</div>
				<div class="card-body fw-bold">
					<div class="d-flex">
						<div class="flex-1 d-flex">
							<div class="me-2"><i class="fa fa-store fa-lg fa-fw text-dark text-opacity-50"></i></div>
							<div>Online Store</div>
							<span class="badge bg-primary bg-opacity-15 text-primary fw-bold fs-12px ms-auto me-2">2025-01-05</span>
						</div>
						<div class="w-50px text-center"><a href="#" class="text-decoration-none"><i class="fa fa-lg fa-fw fa-calendar"></i></a></div>
					</div>
					<hr />
					<div class="d-flex">
						<div class="flex-1 d-flex">
							<div class="me-2"><i class="fab fa-shopify fa-lg fa-fw text-dark text-opacity-50"></i></div>
							<div>Shopify</div>
							<span class="badge bg-primary bg-opacity-15 text-primary fw-bold fs-12px ms-auto me-2">2025-01-05</span>
						</div>
						<div class="w-50px text-center"><a href="#" class="text-decoration-none"><i class="fa fa-lg fa-fw fa-calendar"></i></a></div>
					</div>
					<hr />
					<div class="d-flex">
						<div class="flex-1 d-flex">
							<div class="me-2"><i class="fab fa-amazon fa-lg fa-fw text-dark text-opacity-50"></i></div>
							<div>
								<div>Amazon</div>
								<div class="d-flex mt-1 text-gray-600">
									<div><i class="fa fa-circle text-warning fs-6px d-block mt-2"></i></div>
									<div class="flex-1 ps-2">
										<div class="mb-2">
											Amazon is disconnected. Connect your Amazon Seller Central account to continue using this sales channel.
										</div>
										<a href="#">Learn more</a>
									</div>
								</div>
							</div>
						</div>
						<div class="w-50px text-center"><a href="#" class="text-decoration-none text-gray-500"><i class="fa fa-lg fa-fw fa-times"></i></a></div>
					</div>
				</div>
			</div>
			<div class="card border-0 mb-4">
				<div class="card-header h6 mb-0 bg-none p-3 d-flex">
					<div class="flex-1">
						<div>Organization</div>
					</div>
				</div>
				<div class="card-body fw-bold">
					<div class="mb-3">
						<label class="form-label">Product type</label>
						<div class="input-group">
							<input type="text" class="form-control" placeholder="Product type" />
							<button class="btn btn-white"><i class="fa fa-search"></i></button>
						</div>
					</div>
					<div class="mb-0">
						<label class="form-label">Vendor</label>
						<div class="input-group">
							<input type="text" class="form-control" placeholder="Apple store supplies" />
							<button class="btn btn-white"><i class="fa fa-search"></i></button>
						</div>
					</div>
				</div>
			</div>
			<div class="card border-0 mb-4">
				<div class="card-header h6 mb-0 bg-none p-3 d-flex">
					<div class="flex-1">
						<div>Collections</div>
					</div>
				</div>
				<div class="card-body">
					<div class="d-flex align-items-center position-relative fw-bold mb-2">
						<span class="position-absolute top-0 bottom-0 start-0 d-flex align-items-center px-10px"><i class="fa fa-search"></i></span>
						<input type="text" class="form-control ps-30px" placeholder="Search for collections" />
					</div>
					<p class="mb-0 fw-bold text-muted">
						<i class="fa fa-question-circle fa-fw"></i> Add this product to a collection so it's easy to find in your store.
					</p>
				</div>
			</div>
			<div class="card border-0 mb-4">
				<div class="card-header h6 mb-0 bg-none p-3 d-flex">
					<div class="flex-1">
						<div>Tags</div>
					</div>
				</div>
				<div class="card-body">
					<div class="fw-bold mb-3"><a href="#">View all tags</a></div>
					<tags-input v-model="tag" :tags="tags" />
				</div>
			</div>
		</div>
	</div>
</template>