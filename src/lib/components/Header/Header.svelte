<header>
    <div class="navbar bg-secondary">
        <div class="flex-1">
            <a href={null} class="btn btn-ghost normal-case text-xl">SELL</a>
        </div>
        <div class="flex-none gap-2">
            <!-- <div class="form-control">
                <input type="text" placeholder="Search" class="input input-bordered" />
            </div> -->
            <label for="my-drawer-2" class="btn btn-ghost text-white btn-xs drawer-button lg:hidden">Menu</label>
            <!-- ELIMINAR VISIBILIDAD EN MOVILES Y AGREGAR MENU PARA MOVILES -->
            <div class="dropdown dropdown-end">
                <label for="" tabindex="-1" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-full">
                        <img alt="profile" src="https://placeimg.com/80/80/people" />
                    </div>
                </label>
                <ul tabindex="-1" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                        <a href={null} class="justify-between">
                            Profile
                            <span class="badge">New</span>
                        </a>
                    </li>
                    <li><a href={null}>Settings</a></li>
                    <li><a href={null}>Logout</a></li>
                </ul>
            </div>
        </div>
    </div>
</header>