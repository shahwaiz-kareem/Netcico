const alpineTemplate = 
   `<div class="box">
<div class="">
  <div class=" bg-white rounded flex items-center w-full p-3 ">
    <button @click="getImages()" class="outline-none focus:outline-none"><svg class=" w-5 text-gray-600 h-5 cursor-pointer" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
    <input type="search" name="" id="" @keydown.enter="getImages()" placeholder="Search..." x-model="q" class="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent">
    <div class="select">
      <select name="searchCategory"  x-model="image_type" class="text-sm outline-none focus:outline-none bg-transparent">
        <option value="all" selected>All</option>
        <option value="photo">Photo</option>
        <option value="illustration">Illustration</option>
        <option value="vector">Vector</option>
        </select>
    </div>
  </div>

</div>
</div>
`


export default alpineTemplate
