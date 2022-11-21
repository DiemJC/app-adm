<script>
    import { HomeIcon, UserIcon, TagIcon, BoxIcon, CartIcon, FolderIcon, BagIcon, InfoIcon } from '$lib/components';
</script>

<ul class="menu p-4 w-80 bg-base-100 text-base-content shadow-xl">
    <li class="mb-2">Control</li>
    <li><a href={null} ><HomeIcon/> Dashboards</a></li>
    <li><a href={null} ><UserIcon/> Colaboradores</a></li>
    <div class="divider"></div>
    <!--DESDE ACÁ-->
    <li><a href="/brand"><TagIcon/> Marcas</a></li>
    <li><a href="/categories"><BoxIcon/> Categorias</a></li>
    <li><a href="/products"><CartIcon/> Productos</a></li>
    <li><a href="/entry"><FolderIcon/> Ingreso</a></li>
    <li><a href="/sales"><BagIcon/> Ventas</a></li>
    <li><a href="/faq"><InfoIcon/> Preguntas Frecuentes</a></li>
</ul>